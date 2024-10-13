const SubCategory = require('../models/subCategoryModel');
const handlerFactory = require('./handlerFactory');

exports.getAllSubCategories = handlerFactory.getAll(SubCategory);
exports.getSubCategory = handlerFactory.getOne(SubCategory);
exports.createSubCategory = handlerFactory.createOne(SubCategory);
exports.updateSubCategory = handlerFactory.updateOne(SubCategory);
exports.deleteSubCategory = handlerFactory.deleteOne(SubCategory);
