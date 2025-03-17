/*// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port the server will listen on
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
*/
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
