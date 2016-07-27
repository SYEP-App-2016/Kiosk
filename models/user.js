var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  email: {required : 'true', type : String},
  password: {required : 'true', type : String}
});

var User = mongoose.model('User', userSchema);

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};
module.exports = 'User', userSchema;
