const express = require('express');
const app = express();

// Middleware function to add current time to request object
const addTimeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// Chaining middleware and handler in the '/now' route
app.get('/now', addTimeMiddleware, (req, res) => {
  res.json({ time: req.time });
});

module.exports = app;
