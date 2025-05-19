const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const paymentRoutes = require('../routes/paymentRoutes');

dotenv.config();

const app = express();
const port = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// API routes
app.use('/api/payment',  paymentRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});

