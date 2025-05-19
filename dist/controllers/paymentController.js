"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// const QRCode = require('qrcode');
// const Razorpay = require('razorpay');
// require('dotenv').config();

// const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET
//   });

// exports.createOrder = async (req, res) => {
//     try {
//       const { type, percent } = req.body;

//       // Determine amount based on type and percent
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

//       // Create QR code WITHOUT customer_id to test
//       const qrCode = await instance.qrCode.create({
//         type: 'upi_qr',
//         name: 'Store QR - ' + Date.now(),
//         usage: 'single_use',
//         fixed_amount: true,
//         payment_amount: amount * 100, // amount in paise
//         description: 'Payment for Order',
//         // customer_id: omit this field for now
//         close_by: Math.floor(Date.now() / 1000) + 3600, // expires in 1 hour
//       });

//       // Debug log full QR code response
//       console.log('QR Code created successfully:', qrCode);
//     //   const qrCode = 

//       // Send full response so frontend can inspect all fields
//       res.json({
//         success: true,
//         qrUrl: qrCode.image_url,
//         amount: amount
//       });

//     } catch (err) {
//       console.error('QR Code creation error:', err);
//       res.status(500).json({ error: 'Failed to create QR code', details: err.message });
//     }
//   };

// // exports.createOrder = async (req, res) => {
// //     try {
// //       const { type, percent } = req.body;
// //       let amount;

// //       if (type === 'full') {
// //         amount = parseInt(process.env.FULL_AMOUNT, 10);
// //       } else if (type === 'half') {
// //         amount = parseInt(process.env.HALF_AMOUNT, 10);
// //       } else if (type === 'custom') {
// //         const fullAmount = parseInt(process.env.FULL_AMOUNT, 10);
// //         if (![25, 50, 75, 100].includes(percent)) {
// //           return res.status(400).json({ error: 'Invalid custom percentage' });
// //         }
// //         amount = Math.round((fullAmount * percent) / 100);
// //       } else {
// //         return res.status(400).json({ error: 'Invalid payment type' });
// //       }

// //       // 1. Create unique Razorpay customer
// //       const customer = await instance.customers.create({
// //         name: 'Demo User',
// //         contact: '999999' + Date.now().toString().slice(-4), // more unique
// //         email: `demo${Date.now()}@example.com`
// //       });

// //       // 2. Create QR Code
// //       const qrCode = await instance.qrCode.create({
// //         type: 'upi_qr',
// //         name: 'Store QR - ' + Date.now(),
// //         usage: 'single_use',
// //         fixed_amount: true,
// //         payment_amount: amount * 100, // amount in paisa
// //         description: 'Payment for Order',
// //         customer_id: customer.id,
// //         close_by: Math.floor(Date.now() / 1000) + 3600 // expires in 1 hour
// //       });
// //       console.log("qrCode===>",qrCode)

// //       res.json({
// //         id: qrCode.id,
// //         amount: amount,
// //         qrUrl: qrCode.image_url,
// //         status: qrCode.status
// //       });

// //     } catch (err) {
// //       console.error('QR Code creation error:', err);
// //       res.status(500).json({ error: 'Failed to create QR code' });
// //     }
// //   };
// // exports.paymentSuccess = (req, res) => {
// //   console.log('Payment success payload:', req.body);
// //   res.json({ message: 'Payment verification successful (mock response)' });
// // };

// exports.paymentSuccess = (req, res) => {
//     const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
//     const receivedSignature = req.headers['x-razorpay-signature'];
//     const payload = JSON.stringify(req.body);

//     const expectedSignature = crypto
//       .createHmac('sha256', webhookSecret)
//       .update(payload)
//       .digest('hex');

//     if (receivedSignature === expectedSignature) {
//       console.log('Webhook signature verified');
//       console.log('Payment success payload:', req.body);
//       // TODO: Save to DB or trigger next action
//       return res.status(200).json({ message: 'Webhook received and verified' });
//     } else {
//       console.warn('❌ Invalid webhook signature');
//       return res.status(400).json({ error: 'Invalid signature' });
//     }
//   };

// exports.handleWebhook = (req, res) => {
//     const secret = process.env.RAZORPAY_WEBHOOK_SECRET; // same as set in Razorpay dashboard

//     const signature = req.headers['x-razorpay-signature'];
//     const body = JSON.stringify(req.body);

//     const expectedSignature = crypto
//       .createHmac('sha256', secret)
//       .update(body)
//       .digest('hex');

//     if (signature !== expectedSignature) {
//       return res.status(400).json({ error: 'Invalid signature' });
//     }

//     console.log('✅ Razorpay Webhook Event Received:', req.body);

//     // You can handle payment.captured, payment.failed, etc. here
//     // Example:
//     if (req.body.event === 'payment.captured') {
//       // Update DB, notify user, etc.
//       console.log('💰 Payment captured:', req.body.payload.payment.entity);
//     }

//     res.status(200).json({ status: 'ok' });
//   };

var Razorpay = require('razorpay');
var crypto = require('crypto');
require('dotenv').config();

// Razorpay instance
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// -----------------------------
// Create Order (QR Code)
// -----------------------------
exports.createOrder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, type, percent, amount, fullAmount, qrCode;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, type = _req$body.type, percent = _req$body.percent;
          if (!(type === 'full')) {
            _context.next = 6;
            break;
          }
          amount = parseInt(process.env.FULL_AMOUNT, 10);
          _context.next = 18;
          break;
        case 6:
          if (!(type === 'half')) {
            _context.next = 10;
            break;
          }
          amount = parseInt(process.env.HALF_AMOUNT, 10);
          _context.next = 18;
          break;
        case 10:
          if (!(type === 'custom')) {
            _context.next = 17;
            break;
          }
          fullAmount = parseInt(process.env.FULL_AMOUNT, 10);
          if ([25, 50, 75, 100].includes(percent)) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: 'Invalid custom percentage'
          }));
        case 14:
          amount = Math.round(fullAmount * percent / 100);
          _context.next = 18;
          break;
        case 17:
          return _context.abrupt("return", res.status(400).json({
            error: 'Invalid payment type'
          }));
        case 18:
          _context.next = 20;
          return instance.qrCode.create({
            type: 'upi_qr',
            name: 'Store QR - ' + Date.now(),
            usage: 'single_use',
            fixed_amount: true,
            payment_amount: amount * 100,
            // amount in paise
            description: 'Payment for Order',
            close_by: Math.floor(Date.now() / 1000) + 3600 // expires in 1 hour
          });
        case 20:
          qrCode = _context.sent;
          console.log('✅ QR Code created successfully:', qrCode);
          res.json({
            success: true,
            qrUrl: qrCode.image_url,
            amount: amount
          });
          _context.next = 29;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.error('❌ QR Code creation error:', _context.t0);
          res.status(500).json({
            error: 'Failed to create QR code',
            details: _context.t0.message
          });
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 25]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// -----------------------------
// Razorpay Webhook Handler
// -----------------------------
exports.handleWebhook = function (req, res) {
  var secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  var signature = req.headers['x-razorpay-signature'];
  var payload = JSON.stringify(req.body);
  var expectedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  if (signature !== expectedSignature) {
    console.warn('❌ Invalid Razorpay webhook signature');
    return res.status(400).json({
      error: 'Invalid signature'
    });
  }
  var event = req.body.event;
  switch (event) {
    case 'payment.captured':
      var payment = req.body.payload.payment.entity;
      console.log('💰 Payment captured:', payment);
      // TODO: Save to DB
      break;
    case 'payment.failed':
      var failed = req.body.payload.payment.entity;
      console.log('❌ Payment failed:', failed);
      // TODO: Log failed attempts
      break;
    default:
      console.log("\u2139\uFE0F Unhandled event: ".concat(event));
  }
  res.status(200).json({
    status: 'ok'
  });
};