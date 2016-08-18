var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js');



router.get('/Book/:isbn', function(req,res){
  Book.find({isbn: req.params.isbn }, function(err, book){
    b = book[0];
    res.send({ results: b });
  });
});


router.get('/Genre', function(req,res){
  Book.find({}, {
    genre: 1
  }, function(err, data){
    if(err) throw err;

    console.log(data.length);
    res.send({ results: data });
  });
});


module.exports = router;