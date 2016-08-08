var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Genre = require('../models/genre.js');


/*
    REQUEST A BOOK FORM ??
*/

router.get('/', function(req, res){
    res.render('index');
});


router.get('/About', function(req, res){
    res.render('about');
});


router.get('/Contact', function(req, res){
    res.render('contact');
});

module.exports = router;