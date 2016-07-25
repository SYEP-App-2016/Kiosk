var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Genre = require('../models/genre.js');


//retrieves documents and sets index
router.get('/genres', function(req,res){
  Genre.find({}, function (err,genres){
    res.render('genres', {
      list: genres
    });
  });
});

router.post('/addGenre', function (req, res){
  var posted = req.body;
  // console.log(posted);
  var newGenre = new Genre({
    title: posted.title
  });

  newGenre.save(function (err){
    if(err) throw err;
  });

  res.redirect('/genres');
});

router.post('/removeGenre', function(req, res){
  Genre.find({_id: req.body.id}, function(err, genre){
    if(err) throw err;
    genre = genre[0];
    genre.remove(function(err){
        if(err) throw err;
        console.log('Genre removed.');
    });
  });

  res.redirect('/genres');
});

module.exports = router;
