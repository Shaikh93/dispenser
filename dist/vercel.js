"use strict";

var app = require('./index');
module.exports = function (req, res) {
  app(req, res);
};