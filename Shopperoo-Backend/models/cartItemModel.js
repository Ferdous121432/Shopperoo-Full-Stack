const mongoose = require('mongoose');

//TODO updated at and created at should be updated automatically  when the cart item is updated or created  respectively

const cartItemSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  product_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

cartItemSchema.index({ user_id: 1, product_id: 1 }, { unique: true });

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
