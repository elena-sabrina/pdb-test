'use strict';

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const connectMongo = require('connect-mongo');
const expressSession = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const serveFavicon = require('serve-favicon');
const basicAuthenticationDeserializer = require('./middleware/basic-authentication-deserializer.js');
const bindUserToViewLocals = require('./middleware/bind-user-to-view-locals.js');

//const authenticationRouter = require('./routes/authentication');
const productRouter = require('./routes/product');
const baseRouter = require('./routes/index');

const cors = require('cors');

const app = express();

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(
  cors({
    origin: (process.env.ALLOWED_CORS_ORIGINS || '').split(','),
    credentials: true
  })
);
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    },
    store: new (connectMongo(expressSession))({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);
app.use(basicAuthenticationDeserializer);
app.use(bindUserToViewLocals);

app.use('/', baseRouter);
//pp.use('/authentication', authenticationRouter);
app.use('/product', productRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
