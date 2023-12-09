const express = require('express');
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const connectDB = require('./config/db')
const disConnectDB = require('./config/db')

const app = express();

const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')

connectDB()

app.use(cors())

app.use('/auth', contextAuthRoute);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/group'. groupRoutes);
app.use('/admin', adminRoutes)

process.on("SIGINT", disConnectDB())

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
