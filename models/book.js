var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var bookSchema = mongoose.Schema({
  acc_id: mongoose.Schema.Types.ObjectId,
  title: { required : 'true', type : String},
  img: String,
  sImg: String,
  author: { required : 'true', type : String},
  summary: String,
  pageCount: Number,
  copies: Number,
  copiesAvailable: Number,
  ratings: Number,
  publisher: String,
  coverType: String,
  genre: String,
  isbn: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
