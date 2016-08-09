var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Book = require('../models/book.js'),
    moment = require('moment');



var checkoutSchema = mongoose.Schema({
  checkedOut: Date,
  checkedIn: Date,
  title: String,
  author: String,
  desc: String
});

var Checkout = mongoose.model('Book', checkoutSchema);

module.exports = Checkout;
