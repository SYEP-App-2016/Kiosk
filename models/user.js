var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  first: String,
  last: String,
  email: {required : 'true', type : String},
  password: {required : 'true', type : String}
});

var User = mongoose.model('User', userSchema);


module.exports = User;
