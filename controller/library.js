var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js')


router.get('/', function(req, res){
    
    Book.find({}, function (err, books){
      console.log(books);
      
      if(err){ throw err; }

      res.render('./library', {
        list: books
      });
    });

});


router.get('/Library/:genre', function(req, res){
  
  Book.find({ genre: req.params.genre }, function(err, data){
    if (err) { throw err; }
    res.render('Genre/filter', {results: data});
  });
  

  res.render('Genre/filter');
});



module.exports = router;
