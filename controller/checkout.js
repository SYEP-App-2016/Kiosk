var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    moment = require('moment');
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js');


//TEST ROUTE???
router.get('/index', function(req,res){
  res.render('_index');
});


// STUDENT LOGIN VIA SCAN OR STUDENTID
router.get('/', function(req,res){
  
  /* NOTHING TO REQUEST
  Checkout.find({}, function (err,books){
    if(err){console.log('Books not found??? ' + err);}
    res.render('checkout/checkout', {
      list: books,
      user: req.user
    });
  });
  */
  res.render('Checkout/cart', { user: req.user });
});



router.get('/cart', function(req,res){
    res.render('Checkout/Cart', {user: req.user });
});

router.post('/checkout', function (req, res){
  var posted = req.body;
  var checkout = new Checkout({
    isbn: posted.isbn,
    osis: posted.osis,
    checkedOut: moment().format("MMM Do YY"),
    checkedIn: moment().add(21, 'days').calendar()
  });
  // console.log(checkout.checkedOut);
  checkout.save(function (err){
    if(err) throw err;

    res.redirect('/checkout');
  });

});

router.post('/deleteCheckouts', function (req,res){
  Checkout.find({}, function(err, checkout) {
    if (err) throw err;

    // delete him
    Checkout.remove(function(err) {
      if (err) throw err;
      res.redirect('/checkout/cart');
    });
  });
});

module.exports = router;