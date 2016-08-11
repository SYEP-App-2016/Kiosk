var passport = require('passport'),
    User = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    flash = require('connect-flash');

router.get('user/login', function(req, res){

  User.find({}, function (err,users){
    if(err){console.log('users not found??? ' + err);}
    // console.log(users);
    res.render('./login', {
      list: users
    });
  });
});

router.get('/Signup', function (req, res){
  res.render('./signUp', {
      title: 'Submit a user'
  });
});

router.post('/Signup', function (req, res){
  var posted = req.body;

  var newUser = new User({
    first: posted.first,
    last: posted.last,
    osis: posted.osis
  });



  newUser.save(function (err){
    if(err) throw err;

    res.redirect('/user/login');
  });

});

// Profile Template
/*
var profile = {
    OSIS: 0
    first: "",
    mInital: "",
    last: "",
    contact = [ // MULTIPLE ENTRIES
        {
            uID : 0,
            type: "", // ["Mobile", "Email" ]
            content: "" // STORE AS STRING
        }
    ]
};

*/

// GET PROFILE
// UPDATE PROFILE




module.exports = router;
