var localStrategy = require('passport-local'),
    User = require('../models/user'),
    passport = require('passport');

passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local-signup',
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        process.nextTick(function(){
            User.findOne({'email': email}, function(err, User){
                if(err) {return done(err);}
                else{
                    newUser = new User();

                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);

                    newUser.save(function(err){
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }
));
passport.use('local-login',
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        User.findOne({'email': email}, function(err, User){
            if(err) return done(err);

            if(!User) return done(null, false, req.flash('loginMessage', 'No User found.'))

            if(!User.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password.'))

            return done(null, User);
        });
    }));
