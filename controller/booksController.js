var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js');
    Genre = require('../models/genre.js');

var page = {
  title: "Library Assistant"
}

//retrieves documents and sets index
router.get('/', function(req,res){
  Book.find({}, function (err,books){
    if(err){console.log('Books not found??? ' + err);}
    // console.log(books);
    res.render('index', {
      list: books
    });
  });
});

router.get('/book/:id/', function(req,res){
  Book.find({_id: req.params.id}, function(err, book){
    var b = book[0];
    if(b.summary == undefined){
      b.summary = "Unconfirmed"
    }
    if(b.pageCount == undefined){
      b.pageCount = 0;
    }
    if(b.copiesAvailable== undefined){
      b.copiesAvailable = 0;
    }
    if(b.ratings == undefined){
      b.ratings = 0;
    }
    if(b.publisher == undefined){
      b.publisher = "Unconfirmed"
    }
    if(b.coverType == undefined){
      b.coverType = "Unconfirmed"
    }
    res.render('book', {
        list: book,
        title: b.title,
        author: b.author,
        summary: b.summary,
        pageCount: b.pageCount,
        copiesAvailable: b.copiesAvailable,
        ratings: b.ratings,
        coverType: b.coverType,
        publisher: b.publisher
    });

    console.log(b.pageCount);


  });
});


//sets ability to edit
router.get('/book/:id/edit', function(req,res){
  Book.find({_id: req.params.id}, function(err, book){
    res.render('edit', {
        list: book,
        title: book[0].title,
        author: book[0].author,
        summary: book[0].summary,
        pageCount: book[0].pageCount,
        copies: book[0].copies,
        copiesAvailable: book[0].copiesAvailable,
        ratings: book[0].ratings,
        publisher: book[0].publisher,
        coverType: book[0].coverType
    });
  });
});



//sets submit pagee
router.get('/submit', function(req,res){
  res.render('submit', {title: 'submit a book'});
});



//saves new books
router.post('/submit', function (req, res){
  var posted = req.body;
  // console.log(posted);
  var newBook = new Book({
    title: posted.title,
    author: posted.author,
    summary: posted.summary
  });

  newBook.save(function (err){
    if(err) throw err;
    console.log('Book Submitted!');
  });
    res.redirect('book/'+newBook.id+'/edit');

    Book.find({_id: req.params.id}, function(err, book){

    });
});




router.post('/book/:id/edit', function(req,res){
  Book.find({_id: req.params.id}, function(err, book){
    res.render('editBook', {
      title: book.title,
      author: book.author,
      summary: book.summary,
      list: book
    });

    Book.findOneAndUpdate({ _id: req.params.id }, {
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      pageCount: req.body.pageCount,
      copies: req.body.copies,
      copiesAvailable: req.body.copiesAvailable,
      ratings: req.body.ratings,
      publisher: req.body.publisher,
      coverType: req.body.coverType
    }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
      });

  });

  res.redirect('/');

});






module.exports = router;
