var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// ADD IMAGE URL
var bookSchema = mongoose.Schema({
  title: {required : 'true', type : String},
  author: {required : 'true', type : String},
  summary: String,
  pageCount: Number,
  copies: Number,
  copiesAvailable: Number,
  ratings: Number,
  publisher: String,
  coverType: String,
  genre: [String]
});

var Book = mongoose.model('Book', bookSchema);

var hunger = new Book({title:'The Hunger Games', author: 'lady'});


module.exports = Book;
