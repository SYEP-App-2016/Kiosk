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
   passport = require('passport'),
   expressSession = require('express-session'),
   books = require('./controller/booksController'),
   users = require('./controller/usersController');
   genres = require('./controller/genresController');


   mongoose.connect(database.url, function (err,res){
     if (err){console.log('Error Connecting to:' + database.url + "\n" + err);}
     else{console.log('Connection Successful.');}
   });


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname+"/public"));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vdn.api+json'}));
app.use(methodOverride());

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', books);
app.use('/', users);
app.use('/', genres);

var flash = require('connect-flash');
app.use(flash());

var initPassport = require('./passport/init');
initPassport(passport);



app.listen(port);
console.log("Listening on port" + port);

var db = mongoose.connection;

module.exports = app;
