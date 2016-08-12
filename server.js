var express = require('express'),
   app = express(),
   mongoose = require('mongoose'),
   port = process.env.PORT || 8080,
   database = require('./config/database.js'),
   morgan = require('morgan'),
   bodyParser = require('body-parser'),
   methodOverride = require('method-override'),
   LocalStrategy = require('passport-local').Strategy,
   cookie = require('cookie'),
   expressSession = require('express-session'),
   passport = require('passport');

   mongoose.connect(database.url, function (err,res){
     if (err){console.log('Error Connecting to:' + database.url + "\n" + err);}
     else{console.log('Connection Successful.');}
   });


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.use(express.static(__dirname + "/public"));
app.use( express.static(__dirname + '/public') );
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vdn.api+json'}));
app.use(methodOverride());


app.use('/', require('./controller/index'));
app.use('/Book', require('./controller/book'));
app.use('/User', require('./controller/user'));
app.use('/Genre', require('./controller/genre'));
app.use('/Checkout', require('./controller/checkout'));

// Configuring Passport
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// ADMINISTRATION SECTION
app.use('/Admin', require('./controller/admin'));

var flash = require('connect-flash');
app.use(flash());


app.listen(port);
console.log("Listening on port" + port);

// OUTSIDE LISTENING PORT ??/
var db = mongoose.connection;
module.exports = app;
