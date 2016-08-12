var localStrategy = require('passport-local'),
    User = require('../models/user'),
    passport = require('passport');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, osis, cid, done) {
    // check in mongo if a user with osis exists or not
    User.findOne({ 'osis' :  osis },
      function(err, user) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // osis does not exist, log error & redirect back
        if (!user){
          console.log('User Not Found with osis '+osis);
          return done(null, false,
                req.flash('message', 'User Not found.'));
        }
        // User exists but wrong cid, log the error
        if (!isValidcid(user, cid)){
          console.log('Invalid cid');
          return done(null, false,
              req.flash('message', 'Invalid cid'));
        }
        // User and cid both match, return user from
        // done method which will be treated like success
        return done(null, user);
      }
    );
}));
