"use strict";

var crypto = require('crypto');
var axios = require('axios');
var webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET; // set this in .env or replace directly

// 1. Create a dummy webhook payload
var payload = {
  event: 'payment.captured',
  payload: {
    payment: {
      entity: {
        id: 'pay_mock_12345',
        amount: 120000,
        // in paise, ₹1200
        currency: 'INR',
        status: 'captured',
        method: 'upi',
        description: 'Mock test payment',
        email: 'test@example.com',
        contact: '9999999999',
        notes: {},
        created_at: Math.floor(Date.now() / 1000)
      }
    }
  }
};
var body = JSON.stringify(payload);

// 2. Generate the signature Razorpay would generate
var signature = crypto.createHmac('sha256', webhookSecret).update(body).digest('hex');

// 3. Send POST request to your webhook handler
axios.post('http://localhost:5000/webhook', payload, {
  headers: {
    'Content-Type': 'application/json',
    'x-razorpay-signature': signature
  }
}).then(function (res) {
  console.log('✅ Webhook sent successfully:', res.data);
})["catch"](function (err) {
  var _err$response;
  console.error('❌ Error sending mock webhook:', ((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) || err.message);
});