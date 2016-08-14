var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js')


/*
    REQUEST A BOOK FORM ??
*/

router.get('/', function(req, res){
    Book.find({}, function (err,books){
      console.log(books);
      if(err){console.log('Books not found??? ' + err);}
      // console.log(books);
      res.render('./index', {
        list: books
      });
    });
});


router.get('/About', function(req, res){
    res.render('about');
});


router.get('/Contact', function(req, res){
    res.render('contact');
});

module.exports = router;
