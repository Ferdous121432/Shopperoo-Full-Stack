const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
  },
  price: {
    type: Number,
    default: 300,
    required: [true, 'A product must have a price'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'A product must have a description'],
  },
  summary: {
    type: String,
    required: [true, 'A product must have a summary'],
  },
  imageCover: {
    type: String,
    required: [true, 'A product must have a cover image'],
  },
  images: {
    type: [String],
  },
  categoryID: {
    type: mongoose.Schema.ObjectId,
    // required: [true, 'A product must have a category'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

// Document middleware: runs before .save() and .create()
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
