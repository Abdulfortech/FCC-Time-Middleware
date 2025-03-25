const express = require('express');
const app = express();

// Middleware function to add current time to request object
const addTimeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// app.get('/user', function(req, res, next) {
//     req.user = getTheUserSync();  // Hypothetical synchronous operation
//     next();
//   }, function(req, res) {
//     res.send(req.user);
//   });

// Chaining middleware and handler in the '/now' route
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
  res.json({ time: req.time });
});

module.exports = app;
