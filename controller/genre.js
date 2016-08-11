var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Genre = require('../models/genre.js');


// CRUD

/*
// CREATE
GET.CREATE ??
*/

router.post('/Add', function (req, res){
  var posted = req.body;
  // console.log(posted);
  var newGenre = new Genre({
    title: posted.title,
    icon: posted.icon
  });

  newGenre.save(function (err){
    if(err) throw err;
  });

  res.redirect('/genres');
});


// RETRIEVE ALL
//retrieves documents and sets index
router.get('/', function(req,res){
    Genre.find({}, function (err,genres){
      res.render('genres', {
        list: genres
      });
    });
});


// DELETE
router.post('/Remove', function(req, res){
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
