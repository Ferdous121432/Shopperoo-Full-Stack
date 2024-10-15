const stripe = require('stripe')(
  'sk_test_51Q8ouGIeuxFSv7HPlr9sfndE1pFAldh7omOqoAd44Lquoh0PcZbKLS1p267wdRlk9kfdMo4rPlZOri9fsJdY7ojU00VEDXXFI0',
);
// console.log('Booking controller ❌❌❌❌❌ stripe', stripe);

// Ensure the Stripe secret key is set
// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error('Stripe secret key is not set in environment variables.');
// }

const Product = require('../models/productModel');
const Checkout = require('../models/checkoutModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// single product to checkout
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  //TODO: for multiple products, we need to loop through the products and get the price of each product
  const product = req.body;
  console.log('Booking controller ❌❌❌❌❌ tour', product);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `http://localhost:5173/product`,
    cancel_url: `http://localhost:5173/product`,
    customer_email: req.user.email,
    client_reference_id: req.params.product_id, //TODO: will be replaced with product id
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${product.productName}`,
            description: product.description,
            images: [
              `https://shopperoo-backend.vercel.app/img/products/cover-image/${product.imageCover}`,
            ],
          },
          unit_amount: product.price * 100, // In stripe, currency is in cents
        },
        quantity: product.quantity,
      },
    ],
  });

  console.log('Checkout controller ❌❌❌❌❌', session);

  // 3) Create a new checkout document in the database
  if (session.id) {
    //TODO: Data will be generated from session object
    await Checkout.create({
      session_id: session.id,
      currency: session.currency,
      totalPrice: session.amount_total / 100,
      subtotal: session.amount_subtotal / 100,
      unitPrice: product.price,
      quantity: product.quantity,
      deliveryAddress: session.billing_address_collection,
      products: product.product_id,
      user: req.user._id,
    });
  }

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

//TODO: will be implemented in the future
const createProductCheckout = async (session) => {
  const product = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.display_items[0].amount / 100;
  await Checkout.create({
    session_id: session.id,
    currency: session.currency,
    totalPrice: price,
    subtotal: price,
    unitPrice: product.price,
    quantity: product.quantity,
    deliveryAddress: session.billing_address_collection,
    products: product.product_id,
    user,
  });
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createProductCheckout(event.data.object);

  res.status(200).json({ received: true });
};

exports.createBooking = factory.createOne(Checkout);
exports.getBooking = factory.getOne(Checkout);
exports.getAllBookings = factory.getAll(Checkout);
exports.updateBooking = factory.updateOne(Checkout);
exports.deleteBooking = factory.deleteOne(Checkout);
