var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var genreSchema = mongoose.Schema({
  title: {required : 'true', type : String}
});

var Genre = mongoose.model('Genre', genreSchema);


module.exports = Genre;
