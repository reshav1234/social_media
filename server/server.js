const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// Define an API endpoint to retrieve the names
app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({'users':['reshav', 'bruno']});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
