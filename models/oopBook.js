var mongoose = require('mongoose'),
    // Book = require('./book'),
    config = {
        // url: "mongodb://localhost:27017/cypresshills"
        url: "mongodb://localhost:27017/cypresshills"
    };


// SCHEMA 
//
var Schema = mongoose.Schema;
/*
var studentSchema = new Schema({
    OSIS: Number,
    firstName: String,
    mInital: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);
*/

// ADDRESS
var addressSchema = new Schema({
    address: String,
    city: String,
    state: String,
    zipCode: String
});

var Address = mongoose.model('address', addressSchema);

// PROFILE
var profileSchema = new Schema({ firstName: String, lastName: String });

var Profile = mongoose.model('profile', profileSchema);


// DATABASE
// 
var Database = {};

var Database = function(_schema) {

    var schema = {};
    var cn = {};

    // console.log(typeof schema);

    if(typeof schema == 'undefined') {y
        console.error("Database Schema not defined");
        return;
    } else {
        schema = _schema;
        // console.log( _schema );
    }


    mongoose.connect(config.url, function(err){
        if(err) {
            console.log('Error Connection to: ' + config.url + '\n' + err);
        } else { 
            console.log('Connection Successful');
        }
    //Database Drop
    // mongoose.connection.db.dropDatabase();
    });

    // console.log(mongoose.connection.db);
    
    return {
        create: function(obj) { 

            // var s = schema(obj);

            // console.log(s);
            // console.log(schema);
        },
        select: function(data) { 
            Profile.find({}, function(err, data){
                console.log(data);
            });

            Address.find({}, function(){
                console.log(data);
            });

/*
            Profile.find({}, function(err, data){
                console.log(data);
            });
*/
/*
            Address.find({}, function(err, data){
                // console.log(data);
            });
*/  
        },
        update: function(data) { 
        
        },
        remove: function(data) { 
        
        }
    }
}


var MongoDB = new Database(Profile);
/*
var b = {
  title: "Macross Plus",
  summary: "Fighter Jets",
  publisher: "",
  pageCount: 500  
};
*/

 var a = {
    address: "1855 W. Broadway",
    city: "New York",
    state: "NY",
    zipCode: "10010"
};


// MongoDB.create(Profile({firstName: "Demo", lastName: "Trial" }) );

MongoDB.select({});

// console.log( mongoose.connection.db );