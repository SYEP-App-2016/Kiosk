var passport = require('passport'),
    User = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    flash = require('connect-flash');

router.get('/Login', function(req, res){

  User.find({}, function (err,users){
    if(err){console.log('users not found??? ' + err);}
    // console.log(users);
    res.render('./logIn', {
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
    osis: posted.osis,
    cid: posted.cid
  });



  newUser.save(function (err){
    if(err) throw err;

    res.redirect('/user/Login');
  });

});


router.post('/clearAcc', function (req,res){
  User.find({}, function(err, user) {
    if (err) throw err;

    // delete him
    User.remove(function(err) {
      if (err) throw err;
      res.redirect('./login');
    });
  });
});





module.exports = router;
