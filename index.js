// // index.js
// const express = require('express');
// const Razorpay = require('razorpay');
// const QRCode = require('qrcode');
// const bodyParser = require('body-parser');
// const path = require('path');
// const dotenv = require('dotenv')
// dotenv.config()

// const app = express();
// const port = 3000;

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

// // console.log('id = ', process.env.id, process.env.key_secret)
// // Razorpay credentials
// const razorpay = new Razorpay({
//   key_id: process.env.id,     
//   key_secret: process.env.key_secret
// });

// // Create Razorpay order and generate QR
// app.post('/create-order', async (req, res) => {
//   const { amount } = req.body;
// console.log(amount)
//   const options = {
//     amount,
//     currency: 'INR',
//     receipt: `receipt_${Date.now()}`,
//     payment_capture: 1
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     const qrData = `https://checkout.razorpay.com/v1/checkout.js?order_id=${order.id}`;

//     QRCode.toDataURL(qrData, (err, qrCodeUrl) => {
//       // console.log(qrCodeUrl)
          
//       if (err) return res.status(500).json({ error: 'Failed to generate QR code' });

//       res.json({
//         id: order.id,
//         amount: order.amount,
//         qr_code_url: qrCodeUrl
//       });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Order creation failed' });
//   }
// });

// // Optional: mock endpoint for payment success
// app.post('/payment-success', (req, res) => {
//   console.log('Payment success payload:', req.body);
//   res.json({ message: 'Payment verification successful (mock response)' });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();

const app = express();
const port = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// API routes
app.use('/api/payment', paymentRoutes); // ✅ Prefix is /api/payment

// Start server
app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});

