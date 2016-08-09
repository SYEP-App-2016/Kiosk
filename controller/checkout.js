var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js');

router.get('/cart', function(req,res){
  res.render('./checkout', {
        title: "hey"
    });

});


router.post('/checkout', function (req, res){
  var posted = req.body;

  var checkout = new Checkout({
    title: posted.title,
    author: posted.author,
    desc: posted.desc,
    checkedOut: moment().format("MMM Do YY"),
    checkedIn: moment().add(21, 'days').calendar()
  });

  checkout.save(function (err){
    if(err) throw err;

    res.redirect('/book');
  });

});

module.exports = router;
