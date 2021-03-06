var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js'),
    log = require('../config/passport.js');

var ObjectId = mongoose.Types.ObjectId;


var page = {
  title: "Library Assistant"
}

// CRUD

// CREATE
//sets submit pagee
router.get('/Add', function(req,res){
  res.render('Book/add', {
      title: 'Submit a Book'
  });
});

//saves new books
router.post('/Add', function (req, res){
  var posted = req.body;

  var book = new Book({
    title: posted.title,
    author: posted.author,
    summary: posted.summary,
    copiesAvailable: posted.copiesAvailable,
    copies: posted.copiesAvailable,
    publisher: posted.publisher,
    genre: posted.genre,
    img: posted.img,
    sImg: posted.sImg,
    pageCount: posted.pageCount,
    isbn : posted.isbn
  });

  book.save(function (err){
    if(err) throw err;

    res.redirect('Edit/'+ book.id)
  });

});



// RETRIEVE
//retrieves documents and sets index

router.get('/', function(req,res){

  Book.find({}, function (err,books){
    if(err){console.log('Books not found??? ' + err);}
    console.log(books);
    res.render('./library', {
      list: books
    });
  });

});


/* REMOVING IN NEXT UPDATE */
router.get('/API/Book/:isbn', function(req,res){
  Book.find({isbn: req.params.isbn }, function(err, book){
    b = book[0];
    res.send({ results: b });
  });

});

// RETRIEVE 1
router.get('/Details/:id', function(req,res){

  Book.find({_id: new ObjectId(req.params.id) }, function(err, book){
    var b = book[0];
    // console.log("genre : " + b.genre);
    // typeof b.genre[i] !==  ? b.summary : 'n/a'

    // CHECK & SET TO DEFAULT IF TYPE IS UNDEFINED
    // SMALLER CODE *
    res.render('Book/detail', {
        list: book,
        title: b.title,
        author: b.author,
        summary: typeof b.summary !== 'undefined' ? b.summary : 'n/a',
        pageCount: typeof b.pageCount !== 'undefined' ? b.pageCount : 0,
        copiesAvailable: typeof b.copiesAvailable !== 'undefined' ? b.copiesAvailable : 'n/a',
        ratings: typeof b.ratings !== 'undefined' ? b.ratings : 'n/a',
        coverType: typeof b.coverType !== 'undefined' ? b.coverType : 'n/a',
        publisher: typeof b.publisher !== 'undefined' ? b.publisher : 'n/a',
        img:  typeof b.img !== 'undefined' ? b.img : '/assets/MissingCover.svg',
        genre: b.genre
    });

  });
});


// UPDATE
// PARAMETERS / QUERIES ALWAYS LAST IN URL
// INDUSTRY STANDARD
router.get('/Edit/:id', function(req,res){


  Book.find( {_id: new ObjectId(req.params.id) }, function(err, book){
    res.render('Book/edit', {
        list: book,
        id: req.params.id,
        title: book[0].title,
        author: book[0].author,
        summary: book[0].summary,
        pageCount: book[0].pageCount,
        img: book[0].img,
        sImg: book[0].sImg,
        copies: book[0].copies,
        copiesAvailable: book[0].copiesAvailable,
        ratings: book[0].ratings,
        publisher: book[0].publisher,
        coverType: book[0].coverType,
        genre: book[0].genre
    });
  });

});

// MISSING PAGE COUNT PREVIOUS FORMS

router.post('/Edit', function(req,res){


  Book.findOneAndUpdate( {_id: new ObjectId(req.body.id) },
  {
    $set: {
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      pageCount: req.body.pageCount,
      copiesAvailable: req.body.copiesAvailable,
      ratings: req.body.ratings,
      publisher: req.body.publisher,
      coverType: req.body.coverType,
      img: req.body.img,
      sImg: req.body.sImg,
      genre: req.body.genre
    }
  }, function(err, user) {
      if (err) throw err;

      res.redirect('Details/' + req.body.id);

  });

});

router.get('/index', function(req,res){
  res.render('./_index');
});

router.post('/DeleteBooks', function (req,res){
  Book.find({}, function(err, book) {
    if (err) throw err;

    // delete him
    Book.remove(function(err) {
      if (err) throw err;
      res.redirect('/Book/Add');
    });
  });
});




module.exports = router;
