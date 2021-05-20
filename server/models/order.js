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
  receiver: {
    type: String,
    trim: true
  },
  street: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    uppercase: true,
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
