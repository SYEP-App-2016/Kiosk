var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    moment = require('moment');



var checkoutSchema = mongoose.Schema({
  checkedOut: String,
  checkedIn: String,
  isbn: [String],
  osis: String
});

var Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
