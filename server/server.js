const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;



app.use('/api/users',require('./routes/apiRoutes'))


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
