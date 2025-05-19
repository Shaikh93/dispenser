"use strict";

var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/paymentController');
router.post('/createorder', paymentController.createOrder);
// router.post('/paymentsuccess', paymentController.paymentSuccess); // mock
router.post('/webhook', paymentController.handleWebhook);
module.exports = router;