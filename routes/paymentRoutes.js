const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/createorder', paymentController.createOrder);
router.post('/paymentsuccess', paymentController.paymentSuccess); // mock
router.post('/webhook', paymentController.handleWebhook); 

module.exports = router;
