"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var paymentRoutes = require('./routes/paymentRoutes');
dotenv.config();
var app = express();
// const port = 3000;
var port = 8080;

// Serve frontend files
app.use(express["static"](path.join(__dirname, 'public')));
app.use(bodyParser.json());

// API routes
app.use('/api/payment', paymentRoutes);

// Start server
app.listen(port, function () {
  console.log("Server is running at :".concat(port));
});
module.exports = app;