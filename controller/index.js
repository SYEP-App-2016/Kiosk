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

module.exports = router;