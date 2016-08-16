var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    database = require('../config/database.js'),
    moment = require('moment');
    Checkout = require('../models/checkout.js'),
    Book = require('../models/book.js'),
    U = require('../utilities.js');


//TEST ROUTE???
router.get('/index', function(req,res){
  res.render('_index');
});



// STUDENT LOGIN VIA SCAN OR STUDENTID
router.get('/', function(req,res){
  
  /* NOTHING TO REQUEST
=======
router.get('/',U.isLoggedIn, function(req,res){
>>>>>>> 13cd4e43517b10459233464fb06e19970d54d27c
  Checkout.find({}, function (err,books){
    console.log(books);
    if(err){console.log('Books not found??? ' + err);}
    res.render('checkout/checkout', {
      list: books,
      user: req.user
    });
  });
  */
  res.render('Checkout/cart', { user: req.user });
});



router.get('/cart',U.isLoggedIn, function(req,res){
    res.render('Checkout/Cart', {user: req.user });
});

router.post('/checkout', U.isLoggedIn, function (req, res){
  var posted = req.body;


    var checkout = new Checkout({
      isbn: posted.booksArr,
      osis: posted.osis,
      checkedOut: moment().format("MMM Do YY"),
      checkedIn: moment().add(21, 'days').calendar()
    });

        // console.log("amount of books being saved: " + booksArr.length + " isbn of book(" + i +") :" + booksArr[i]);
    // console.log(checkout.checkedOut);
    checkout.save(function (err){
      if(err) throw err;


    });

  res.redirect('/checkout');

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