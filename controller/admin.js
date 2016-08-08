var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Book = require('../models/book.js');
    Genre = require('../models/genre.js');


router.get('/', function(req, res){
  
  res.render('Admin/index', {
      title: 'Library Manager'
    });
});

module.exports = router;