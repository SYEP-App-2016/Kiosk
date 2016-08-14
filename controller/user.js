var passport = require('passport'),
    User = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    flash = require('connect-flash');


// LOGIN BEGINS 
router.get('/Login', function(req, res) {
   res.render('User/logIn', { message: req.flash('loginMessage') });
});


router.post('/Login', passport.authenticate('local-login', {
    successRedirect : '/User/Profile', // redirect to the secure profile section
    failureRedirect : '/User/Login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// LOGIN ENDS




router.get('/Signup', function(req, res) {
    /* WHY IS THE DB TAKING A HIT HERE??  */
    /* REMOVING IN NEXT UPDATE 
    User.find({}, function (err,books){
      if(err){console.log('Books not found??? ' + err);}
      console.log(books);
    });
    */

   // render the page and pass in any flash data if it exists
   res.render('User/signUp', { message: req.flash('loginMessage') });

});

router.post('/Signup', passport.authenticate('local-signup', {
    successRedirect : '/User/Profile', // redirect to the secure profile section
    failureRedirect : '/User/Signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


router.get('/', isLoggedIn, function(req, res) {
  res.render('index', {
      user : req.user // get the user out of session and pass to template
  });
});



router.get('/Profile', isLoggedIn, function(req, res) {
    res.render('User/profile', {
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
