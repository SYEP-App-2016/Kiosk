var mongoose = require('mongoose'),
    Book = require('./book'),
    config = {
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

var addressSchema = new Schema({
    address: String,
    city: String,
    state: String,
    zipCode: String
});

var Address = mongoose.model('Address', addressSchema);



// DATABASE
// 
var Database = {};

var Database = function(schema) {

    this.schema = {};

    // console.log(typeof schema);

    if(typeof schema == 'undefined') {
        console.error("Database Schema not defined");
        return;
    } else {
        this.schema = schema;
        // console.log( this. schema );
    }

    mongoose.connect(config.url, function(err){
        if(err) {
            console.log('Error Connection to: ' + config.url + '\n' + err);
        } else { 
            console.log('Connection Successful');
            console.log(mongoose);
        }
    //Database Drop
    // mongoose.connection.db.dropDatabase();
    });

    return {
        create: function(obj) { 
            // this.schema.Book.insert(obj);
        },
        select: function(data) { 
            this.schema = new schema(data);

            console.log(this.schema); 
        },
        update: function(data) { 
        
        },
        remove: function(data) { 
        
        }
    }
}


var MongoDB = new Database(Address);
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

MongoDB.select({});