var passport = require('passport'),
    User = require('../models/user'),
    express = require('express'),
    router = express.Router();
    flash = require('connect-flash');
//
// router.get('/signUp', function(req, res){
//     res.render('signUp', {message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'});
// });
//
// router.post('/signUp', passport.authenticate('local-signup', {
//     successRedirect: '/login',
//     failureRedirect: '/error',
//     failureFlash: true
// }));
//
// router.get('/login', function(req, res){
//     res.render('login', {message: 'nice'});
// });
//
// router.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/',
//     failureRedirect: '/error',
//     failureFlash: true
// }));
//
// // router.get('/logout', function(req, res){
// //     req.logout();
// //     res.redirect('/');
// // })
//
module.exports = router;
