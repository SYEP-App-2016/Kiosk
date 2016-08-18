var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    moment = require('moment'),
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js'),
    U = require('../utilities.js');


//TEST ROUTE???
router.get('/index', function(req,res){
  res.render('_index');
});



// STUDENT LOGIN VIA SCAN OR STUDENTID
router.get('/', U.isLoggedIn, function(req,res){
  Checkout.find({}, function (err,books){
    console.log(books);
    if(err){console.log('Books not found??? ' + err);}
    res.render('checkout/checkout', {
      list: books,
      user: req.user
    });
  });
});


// router.get('/cart', U.isLoggedIn, function(req,res){
router.get('/Cart', function(req,res){
    res.render('Checkout/Cart', {user: req.user });
});

router.post('/Checkout', U.isLoggedIn, function (req, res){
  var posted = req.body;


    var checkout = new Checkout({
      isbn: posted.booksArr,
      osis: posted.osis,
      checkedOut: moment().format("dddd, MMM Do YYYY"),
      checkedIn: moment().add(14, 'days').format("dddd, MMM Do YYYY")
    });

    checkout.save(function (err){
      if(err) throw err;


    });
  res.redirect('/Checkout');

});

router.post('/DeleteCheckouts', function (req,res){
  Checkout.find({}, function(err, checkout) {
    if (err) throw err;

    // delete him
    Checkout.remove(function(err) {
      if (err) throw err;
      res.redirect('/checkout/cart');
    });
  });
});



router.post('/ReturnBook', function(req,res){

  Checkout.findOneAndUpdate( {},
    { $set: {
        isbn: req.body.booksArr
      }
    }, function(err, checkout) {
        if (err) throw err;

        res.redirect('/Checkout');
  });

});

router.get('/logout', function(req, res) {
   req.logout();
   res.redirect('/user/signup');
});




module.exports = router;
