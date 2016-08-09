var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    moment = require('moment');
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js');



router.get('/cart', function(req,res){
  Checkout.find({}, function (err,checkout){
    if(err){console.log('???' + err);}
    res.render('./checkout', {
          list: checkout
    });
    console.log(checkout);
  });
});


router.post('/checkout', function (req, res){
  var posted = req.body;
  console.log(posted);
  var checkout = new Checkout({
    title: posted.title,
    author: posted.author,
    desc: posted.desc,
    checkedOut: moment().format("MMM Do YY"),
    checkedIn: moment().add(21, 'days').calendar()
  });
  // console.log(checkout.checkedOut);
  checkout.save(function (err){
    if(err) throw err;

    res.redirect('/book');
  });

});

router.post('/AddToCart',function(req, res){

});

module.exports = router;
