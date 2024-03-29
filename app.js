const express = require('express'); //framework 
const app = express(); //app used in the express framework
const cors = require('cors'); // we use corse so that the frontend can consume API's
const bodyparser = require('body-parser') // modify the data to json type
const authRoute = require('./routes/auth.route') // service of authentfication located in the routes directory
const medRoute = require('./routes/meds.route') // service of books located in the routes directory
require('dotenv').config(); // where we store our sensitive data
const mongoose = require('mongoose'); // ODM to connect to our MongoDB database
const checkAuth = require('./middleware/checkAuth'); // Where we used JWT (json web token) to verify authentification

app.use(cors({
  origin: '*'
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

mongoose.connect( process.env.BD_LINK_TO_CONNECT)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


app.use('/auth', authRoute)
app.use('/medecines', checkAuth, medRoute)

module.exports = app
