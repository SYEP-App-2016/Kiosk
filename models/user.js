var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  first: String,
  last: String,
  osis: String,
  cid: String
});

var User = mongoose.model('User', userSchema);

// userSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// userSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = User;
