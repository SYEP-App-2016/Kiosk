var passport = require('passport'),
    User = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    flash = require('connect-flash');


router.get('/login', function(req, res) {

   res.render('login', { message: 'loginMessage' });
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/signup', function(req, res) {
    User.find({}, function (err,books){
      if(err){console.log('Books not found??? ' + err);}
      console.log(books);
    });
   // render the page and pass in any flash data if it exists
   res.render('signup', { message: 'signupMessage' });

});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : './login', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/', isLoggedIn, function(req, res) {
  res.render('index', {
      user : req.user // get the user out of session and pass to template
  });
});

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', {
        user : req.user // get the user out of session and pass to template
    });
});

router.get('/logout', function(req, res) {
   req.logout();
   res.redirect('/');
});


function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on
   if (req.isAuthenticated())
       return next();

   // if they aren't redirect them to the home page
   res.redirect('/');
}




module.exports = router;
