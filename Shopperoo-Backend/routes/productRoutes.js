const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    authController.restrictedTo('admin', 'executive', 'salesman'),
    productController.uploadProductCoverImage,
    productController.resizeProductCoverImage,
    productController.checkBody,
    productController.createProduct,
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictedTo('admin', 'lead-guide'),
    productController.uploadProductCoverImage,
    productController.resizeProductCoverImage,
    productController.updateProduct,
  )
  .delete(
    authController.protect,
    authController.restrictedTo('admin', 'lead-guide'),
    productController.deleteProduct,
  );

// New route to get products by category
router
  .route('/category/:categoryID')
  .get(productController.getProductsByCategory);

module.exports = router;
