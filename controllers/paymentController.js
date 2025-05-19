const QRCode = require('qrcode');
const Razorpay = require('razorpay');
require('dotenv').config();

// exports.createOrder = async (req, res) => {
//   try {
//     const { type, percent } = req.body; // 'full', 'half', or 'custom'
//     console.log('Type:', type, '| Percentage:', percent);

//     let amount;

//     if (type === 'full') {
//       amount = parseInt(process.env.FULL_AMOUNT, 10);
//     } else if (type === 'half') {
//       amount = parseInt(process.env.HALF_AMOUNT, 10);
//     } else if (type === 'custom') {
//       const fullAmount = parseInt(process.env.FULL_AMOUNT, 10);

//       if (
//         percent === undefined ||
//         percent === null ||
//         ![25, 50, 75, 100].includes(percent)
//       ) {
//         return res.status(400).json({ error: 'Invalid or missing custom percentage' });
//       }

//       amount = Math.round((fullAmount * percent) / 100);
//     } else {
//       return res.status(400).json({ error: 'Invalid payment type' });
//     }

//     // Create Razorpay payment link
//     const paymentLink = await razorpay.paymentLink.create({
//       amount: amount * 100, // in paisa
//       currency: 'INR',
//       accept_partial: false,
//       description: 'Payment for order',
//       customer: {
//         name: 'Customer Name',
//         contact: '9876453210',
//         email: 'test@example.com'
//       },
//       notify: {
//         sms: false,
//         email: false
//       },
//       reminder_enable: true
//     });

//     // Generate a QR Code for the payment link
//     const qrData = paymentLink.short_url;

//     QRCode.toDataURL(qrData, (err, qrCodeUrl) => {
//       if (err) return res.status(500).json({ error: 'Failed to generate QR code' });

//       res.json({
//         id: paymentLink.id,
//         amount: amount,
//         qrUrl: qrCodeUrl,
//         paymentLink: qrData
//       });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Order creation failed' });
//   }
// };


const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });

exports.createOrder = async (req, res) => {
    try {
      const { type, percent } = req.body;
  
      // Determine amount based on type and percent
      let amount;
      if (type === 'full') {
        amount = parseInt(process.env.FULL_AMOUNT, 10);
      } else if (type === 'half') {
        amount = parseInt(process.env.HALF_AMOUNT, 10);
      } else if (type === 'custom') {
        const fullAmount = parseInt(process.env.FULL_AMOUNT, 10);
        if (![25, 50, 75, 100].includes(percent)) {
          return res.status(400).json({ error: 'Invalid custom percentage' });
        }
        amount = Math.round((fullAmount * percent) / 100);
      } else {
        return res.status(400).json({ error: 'Invalid payment type' });
      }
  
      // Create QR code WITHOUT customer_id to test
      const qrCode = await instance.qrCode.create({
        type: 'upi_qr',
        name: 'Store QR - ' + Date.now(),
        usage: 'single_use',
        fixed_amount: true,
        payment_amount: amount * 100, // amount in paise
        description: 'Payment for Order',
        // customer_id: omit this field for now
        close_by: Math.floor(Date.now() / 1000) + 3600, // expires in 1 hour
      });
  
      // Debug log full QR code response
      console.log('QR Code created successfully:', qrCode);
    //   const qrCode = 
  
      // Send full response so frontend can inspect all fields
      res.json({
        success: true,
        qrUrl: qrCode.image_url,
        amount: amount
      });
  
    } catch (err) {
      console.error('QR Code creation error:', err);
      res.status(500).json({ error: 'Failed to create QR code', details: err.message });
    }
  };
  
// exports.createOrder = async (req, res) => {
//     try {
//       const { type, percent } = req.body;
//       let amount;
  
//       if (type === 'full') {
//         amount = parseInt(process.env.FULL_AMOUNT, 10);
//       } else if (type === 'half') {
//         amount = parseInt(process.env.HALF_AMOUNT, 10);
//       } else if (type === 'custom') {
//         const fullAmount = parseInt(process.env.FULL_AMOUNT, 10);
//         if (![25, 50, 75, 100].includes(percent)) {
//           return res.status(400).json({ error: 'Invalid custom percentage' });
//         }
//         amount = Math.round((fullAmount * percent) / 100);
//       } else {
//         return res.status(400).json({ error: 'Invalid payment type' });
//       }
  
//       // 1. Create unique Razorpay customer
//       const customer = await instance.customers.create({
//         name: 'Demo User',
//         contact: '999999' + Date.now().toString().slice(-4), // more unique
//         email: `demo${Date.now()}@example.com`
//       });
  
//       // 2. Create QR Code
//       const qrCode = await instance.qrCode.create({
//         type: 'upi_qr',
//         name: 'Store QR - ' + Date.now(),
//         usage: 'single_use',
//         fixed_amount: true,
//         payment_amount: amount * 100, // amount in paisa
//         description: 'Payment for Order',
//         customer_id: customer.id,
//         close_by: Math.floor(Date.now() / 1000) + 3600 // expires in 1 hour
//       });
//       console.log("qrCode===>",qrCode)
  
//       res.json({
//         id: qrCode.id,
//         amount: amount,
//         qrUrl: qrCode.image_url,
//         status: qrCode.status
//       });
  
//     } catch (err) {
//       console.error('QR Code creation error:', err);
//       res.status(500).json({ error: 'Failed to create QR code' });
//     }
//   };
// exports.paymentSuccess = (req, res) => {
//   console.log('Payment success payload:', req.body);
//   res.json({ message: 'Payment verification successful (mock response)' });
// };

exports.paymentSuccess = (req, res) => {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const receivedSignature = req.headers['x-razorpay-signature'];
    const payload = JSON.stringify(req.body);
  
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(payload)
      .digest('hex');
  
    if (receivedSignature === expectedSignature) {
      console.log('✅ Webhook signature verified');
      console.log('Payment success payload:', req.body);
      // TODO: Save to DB or trigger next action
      return res.status(200).json({ message: 'Webhook received and verified' });
    } else {
      console.warn('❌ Invalid webhook signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }
  };

exports.handleWebhook = (req, res) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET; // same as set in Razorpay dashboard
  
    const signature = req.headers['x-razorpay-signature'];
    const body = JSON.stringify(req.body);
  
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');
  
    if (signature !== expectedSignature) {
      return res.status(400).json({ error: 'Invalid signature' });
    }
  
    console.log('✅ Razorpay Webhook Event Received:', req.body);
  
    // You can handle payment.captured, payment.failed, etc. here
    // Example:
    if (req.body.event === 'payment.captured') {
      // Update DB, notify user, etc.
      console.log('💰 Payment captured:', req.body.payload.payment.entity);
    }
  
    res.status(200).json({ status: 'ok' });
  };