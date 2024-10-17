const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.isLoggedIn);

router
  .route('/')
  .get(subCategoryController.getAllSubCategories)
  .post(subCategoryController.createSubCategory);

router
  .route('/:id')
  .get(subCategoryController.getSubCategory)
  .patch(subCategoryController.updateSubCategory)
  .delete(subCategoryController.deleteSubCategory);

module.exports = router;
