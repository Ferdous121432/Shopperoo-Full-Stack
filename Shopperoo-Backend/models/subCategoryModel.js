const mongoose = require('mongoose');
const Category = require('./categoryModel');

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    trim: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: [true, 'Category ID is required'],
  },
  description: {
    type: String,
    trim: true,
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

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
