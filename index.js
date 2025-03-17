// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port the server will listen on
const port = process.env.PORT;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`);
});
