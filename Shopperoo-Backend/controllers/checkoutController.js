// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')(
  'sk_test_51Q8ouGIeuxFSv7HPlr9sfndE1pFAldh7omOqoAd44Lquoh0PcZbKLS1p267wdRlk9kfdMo4rPlZOri9fsJdY7ojU00VEDXXFI0',
);

const Product = require('../models/productModel');
const Checkout = require('../models/checkoutModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const dotenv = require('dotenv');
const { create } = require('../models/cartModel');
const User = require('../models/userModel'); // Add this line to import the User model
const { meta } = require('eslint-plugin-prettier');

//  product to checkout

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // 1) Get the currently booked tour
//   //TODO: for multiple products, we need to loop through the products and get the price of each product
//   const product = req.body;
//   console.log('Booking controller ❌❌❌❌❌ Product', product);
//   const image = `${req.protocol}://${req.get('host')}/img/products/cover-image/${product.image}`;

//   // 2) Create checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     success_url: `http://localhost:5173/product/${product.product_id}`,
//     cancel_url: `http://localhost:5173/product/${product.product_id}`,
//     customer_email: req.user.email,
//     client_reference_id: req.user.id,
//     mode: 'payment',
//     billing_address_collection: 'required',
//     metadata: {
//       product_id: product.product_id,
//       quantity: product.quantity,
//       unit_price: product.price,
//       image: image,
//     },
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: `${product.productName}`,
//             images: [image],
//           },
//           unit_amount: product.price * 100, // In stripe, currency is in cents
//         },
//         quantity: product.quantity,
//       },
//     ],
//     // shipping_options: [
//     //   {
//     //     shipping_rate_data: {
//     //       type: 'fixed_amount',
//     //       fixed_amount: { amount: 1000, currency: 'usd' },
//     //       display_name: 'Standard shipping',
//     //       delivery_estimate: {
//     //         minimum: { unit: 'business_day', value: 5 },
//     //         maximum: { unit: 'business_day', value: 7 },
//     //       },
//     //     },
//     //   },
//     // ],
//   });

//   console.log('Checkout controller ❌❌❌❌❌', session);

//   // 3) Create session as response
//   res.status(200).json({
//     status: 'success',
//     session,
//   });
// });

// multiple or single products to checkout create
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const products = req.body;
  console.log('Booking controller ❌❌❌❌❌ Product', products);
  const lineItems = products.map((product) => {
    const image = `http://localhost:3000/img/products/cover-image/${product.image.split('/')[-1]}`;
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${product.productName}`,
          images: [image],
          metadata: {
            product_id: product.product_id,
            unit_price: product.price,
            image,
          },
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `http://localhost:5173/product`,
    cancel_url: `http://localhost:5173/product`,
    customer_email: req.user.email,
    mode: 'payment',
    billing_address_collection: 'required',
    // metadatadd
    line_items: lineItems,
    // shipping_options: [
    //   {
    //     shipping_rate_data: {
    //       type: 'fixed_amount',
    //       fixed_amount: { amount: 1000, currency: 'usd' },
    //       display_name: 'Standard shipping',
    //       delivery_estimate: {
    //         minimum: { unit: 'business_day', value: 5 },
    //         maximum: { unit: 'business_day', value: 7 },
    //       },
    //     },
    //   },
    // ],
  });

  // console.log('Checkout controller ❌❌❌❌❌', session);

  res.status(200).json({
    status: 'success',
    session,
  });
});

// TODO: will be implemented in the future
const createProductCheckout = async (session) => {
  const session_id = session.id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const currency = session.currency;
  const total_price = session.amount_total / 100;
  const product_id = session.line_items.data.map(
    (item) => item.price.product.metadata.product_id,
  );
  const product_total_price = session.line_items.data.map(
    (item) => item.amount_total / 100,
  );
  const unit_price = session.line_items.data.map(
    (item) => item.price.unit_amount / 100,
  );
  const quantity = session.line_items.data.map((item) => item.quantity);
  const product_image = session.line_items.data.map(
    (item) => item.price.product.metadata.image,
  );

  const products = session.line_items.data.map((item, index) => ({
    product_id: product_id[index],
    product_total_price: product_total_price[index],
    unit_price: unit_price[index],
    quantity: quantity[index],
    product_image: product_image[index],
  }));

  // console.log('webhookCheckout 🚀🚀🚀🚀🚀', session);
  // console.log(
  //   'line Items 👌👌👌👌',
  //   session.line_items.data.map((item) => item.price.product.metadata),
  // );

  //FIXME: delivery address will be implemented in the future
  const deliveryAddress = {
    country: 'BD',
    city: 'N/A',
    line1: 'N/A',
    line2: 'N/A',
    state: 'N/A',
    postal_code: 'N/A',
  };

  console.log('products ⏩⏩', products);

  const data = await Checkout.create({
    session_id,
    currency,
    user,
    total_price,
    products,
    deliveryAddress,
  });

  console.log('Final checkout data after creating DB ⏩😁', data);
};

exports.webhookCheckout = async (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  console.log('Event 🚀🚀🚀🚀🚀', event);

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    console.log('Checkout session completed event received');

    const session = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      { expand: ['line_items', 'line_items.data.price.product'] },
    );

    // Check if the session has already been processed
    const existingCheckout = await Checkout.findOne({ session_id: session.id });
    if (existingCheckout) {
      console.log('Session already processed, skipping creation');
      return res.status(200).json({ received: true });
    }

    // Fulfill the purchase
    await createProductCheckout(session);
  }

  res.status(200).json({ received: true });
};

exports.createBooking = factory.createOne(Checkout);
exports.getBooking = factory.getOne(Checkout);
exports.getAllBookings = factory.getAll(Checkout);
exports.updateBooking = factory.updateOne(Checkout);
exports.deleteBooking = factory.deleteOne(Checkout);

// exports.webhookCheckout = async (req, res, next) => {
//   const signature = req.headers['stripe-signature'];

//   let event = req.body;
//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET,
//     );
//   } catch (err) {
//     console.error(`Webhook error: ${err.message}`);
//     return res.status(400).send(`Webhook error: ${err.message}`);
//   }

//   // Handle the event
//   if (event.type === 'checkout.session.completed') {
//     console.log('Checkout session completed event received');
//     const session = await stripe.checkout.sessions.retrieve(
//       event.data.object.id,
//       { expand: ['line_items', 'line_items.data.price.product'] },
//     );

//     // Check if the session has already been processed
//     const existingCheckout = await Checkout.findOne({ session_id: session.id });
//     if (existingCheckout) {
//       console.log('Session already processed, skipping creation');
//       return res.status(200).json({ received: true });
//     }

//     // Fulfill the purchase
//     await createProductCheckout(session);
//   }

//   res.status(200).json({ received: true });
// };
