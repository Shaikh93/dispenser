require('dotenv').config();
const Razorpay = require('razorpay');

// 🔹 Initialize Razorpay instance
const razorpay = new Razorpay({
    // key_id: 'rzp_test_GggdMFeHqgW9yN',
    // key_secret: 'Stmw8noVPfa9TpLDWtMjdNU5',
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

module.exports = razorpay;
