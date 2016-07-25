var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    url = require('url'),
    database = require('../config/database.js'),
    cookie = require('cookie'),
    User = require('../models/user.js');
    crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

router.get('/signUp', function(req,res){
  res.render('signUp');
  User.find({}, function (err,users){
    if(err){console.log(err);}
      for(var i = 0; i < users.length; i++){
        console.log(users[i].email + ":: " + users[i].password);
      }
  });
});

router.get('/login', function(req,res){
  res.render('login');

  User.find({}, function (err,users){
    if(err){console.log(err);}
      for(var i = 0; i < users.length; i++){
        console.log(users[i].email + ":: " + users[i].password);
      }
  });
});

router.post('/signUp', function(req,res){
  var posted = req.body;
  var newUser = new User({
    email: posted.email,
    password: encrypt(posted.password)
  });


  newUser.save(function (err){
    if(err) throw err;

  });
    res.redirect('/login');
});




module.exports = router;

// var express = require('express'),
// 		router = express.Router(),
// 		passport = require('passport');
//
// var isAuthenticated = function (req, res, next) {
// 	// if user is authenticated in the session, call the next() to call the next request handler
// 	// Passport adds this method to request object. A middleware is allowed to add properties to
// 	// request and response objects
// 	if (req.isAuthenticated())
// 		return next();
// 	// if the user is not authenticated then redirect him to the login page
// 	res.redirect('/');
// }
//
// module.exports = function(passport){
//
// 	/* GET login page. */
// 	router.get('/', function(req, res) {
//     	// Display the Login page with any flash message, if any
// 		res.render('index', { message: req.flash('message') });
// 	});
//
// 	/* Handle Login POST */
// 	router.post('/login', passport.authenticate('login', {
// 		successRedirect: '/',
// 		failureRedirect: '/',
// 		failureFlash : true
// 	}));
//
// 	/* GET Registration Page */
// 	router.get('/signup', function(req, res){
// 		res.render('signup',{message: req.flash('message')});
// 	});
//
// 	/* Handle Registration POST */
// 	router.post('/signup', passport.authenticate('signup', {
// 		successRedirect: '/',
// 		failureRedirect: '/signup',
// 		failureFlash : true
// 	}));
//
// 	/* GET Home Page */
// 	router.get('/login', isAuthenticated, function(req, res){
// 		res.render('home', { user: req.user });
// 	});
//
// 	/* Handle Logout */
// 	router.get('/signout', function(req, res) {
// 		req.logout();
// 		res.redirect('/');
// 	});
//
// 	return router;
// }
