var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    moment = require('moment');
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js'),
    U = require('../utilities.js');



router.get('/', function(req,res){
  Checkout.find({}, function (err,books){
    console.log(books);
    if(err){console.log('Books not found??? ' + err);}
    res.render('checkout/checkout', {
      list: books,
      user: req.user
    });
  });
});



router.get('/cart',U.isLoggedIn, function(req,res){
    res.render('Checkout/Cart', {user: req.user });
});

router.post('/checkout', U.isLoggedIn, function (req, res){
  var posted = req.body,
      booksArr = posted.booksArr;

  for(var i = 0; i < booksArr.length; i++){
    var checkout = new Checkout({
      isbn: booksArr[i],
      osis: posted.osis,
      checkedOut: moment().format("MMM Do YY"),
      checkedIn: moment().add(21, 'days').calendar()
    });

        console.log("amount of books being saved: " + booksArr.length + " isbn of book(" + i +") :" + booksArr[i]);
    // console.log(checkout.checkedOut);
    checkout.save(function (err){
      if(err) throw err;


    });
  }
  res.redirect('/checkout');

});

router.get('/index', function(req,res){
  res.render('_index');
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
