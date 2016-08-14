var mongoose = require('mongoose'),
    // Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  first: String,
  last: String,
  osis: String,
  cid: String
});

userSchema.methods.generateHash = function(cid){
    return bcrypt.hashSync(cid, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(cid){
    return bcrypt.compareSync(cid, this.cid);
};

// var User = mongoose.model('User', userSchema);

// module.exports = User;

module.exports = mongoose.model('User', userSchema);
