const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: [true, 'Checkout must have a session id.'],
  },
  currency: {
    type: String,
    required: [true, 'Checkout must have a currency.'],
  },
  subtotal: {
    type: Number,
    required: [true, 'Checkout must have a subtotal.'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Checkout must have a total price.'],
  },
  discount: {
    type: Number,
  },
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Cart must have at least one product!'],
    },
  ],
  unitPrice: [
    {
      type: Number,
      required: [true, 'Cart must have a price.'],
    },
  ],
  quantity: [
    {
      type: Number,
      required: [true, 'Cart must have a quantity.'],
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Cart must belong to a User!'],
  },
  deliveryAddress: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

checkoutSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name',
  });
  next();
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
