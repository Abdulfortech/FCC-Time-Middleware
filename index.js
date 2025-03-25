const express = require('express');
const app = express();

// Middleware to add current time to request object
const addTimeMiddleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
};

// Chained route with middleware and handler
app.get('/now', addTimeMiddleware, (req, res) => {
    res.json({ time: req.time });
});

// Start the server (optional, for testing purposes)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
