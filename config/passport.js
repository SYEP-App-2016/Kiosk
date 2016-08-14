var User = require('../models/user'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    bcrypt = require('bcrypt-nodejs'),
    flash = require('connect-flash');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

       // used to deserialize the user
passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
       done(err, user);
   });
});

       // =========================================================================
       // LOCAL SIGNUP ============================================================
       // =========================================================================
       // we are using named strategies since we have one for login and one for signup
       // by default, if there was no name, it would just be called 'local'

passport.use('local-signup',
  new localStrategy({
     usernameField : 'osis',
     passwordField : 'cid',
     passReqToCallback : true
  }, function(req, osis, cid, done) {

     process.nextTick(function() {

     User.findOne({ 'osis' :  osis }, function(err, user) {
         if (err)
             return done(err);
         if (user) {
             return done(null, false);
         } else {

             var newUser = new User();

             newUser.osis = osis;
             newUser.cid = newUser.generateHash(cid);

             newUser.save(function(err) {
                 if (err)
                     throw err;
                 return done(null, newUser);
             });
         }

     });

     });
}));

passport.use('local-login',
    new localStrategy({
        usernameField: 'osis',
        passwordField: 'cid',
        passReqToCallback: true
    }, function(req, osis, cid, done){
        User.findOne({'osis': osis}, function(err, user){
            if(err) return done(err);
            if(!user) return done(null, false);
            // if(!user.validPassword(cid)) return done(null, false);
            if(!user.validPassword(cid)) return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password. Please Try Again.'));
            return done(null, User);
        });
    })
);
