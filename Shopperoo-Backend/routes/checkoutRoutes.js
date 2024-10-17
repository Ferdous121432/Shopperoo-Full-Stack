const express = require('express');
const checkoutController = require('../controllers/checkoutController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/checkout-session').post(checkoutController.getCheckoutSession);

// router.use(authController.restrictedTo('admin', 'lead-guide'));

// router
//   .route('/')
//   .get(checkoutController.getAllBookings)
//   .post(checkoutController.createBooking);

// router
//   .route('/:id')
//   .get(checkoutController.getBooking)
//   .patch(checkoutController.updateBooking)
//   .delete(checkoutController.deleteBooking);

module.exports = router;
