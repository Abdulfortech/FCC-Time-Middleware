const app = require('./myApp'); // Import the app
const PORT = process.env.PORT || 3000; // Use environment port or default to 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
