'use strict';

const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  adress: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    lowercase: true,
    trim: true
  },
  typeprice: {
    type: Number
  },
  wheel: {
    type: String,
    lowercase: true,
    trim: true
  },
  wheelprice: {
    type: Number
  },
  totalprice: {
    type: Number
  }
});

module.exports = mongoose.model('Order', orderschema);
