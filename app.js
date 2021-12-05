const mongoose = require('mongoose');
const express = require('express');
// const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const dotenv = require("dotenv");
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const app = express();

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then((data) => { console.log('MongoDB is connected!!!') })
    .catch((err) => { console.log('Error! ' + err) })

app.use(passport.initialize());
require('./middleware/passport')(passport)

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;


