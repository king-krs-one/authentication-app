const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the public folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Serve the dist folder
app.use('/dist', express.static(path.join(__dirname, '../frontend/dist')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});