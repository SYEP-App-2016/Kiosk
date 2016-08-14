var request = require("request");

// IN PROCESS
function makeRequest(_method, _url, _params, callback){

    var options = {
        method: _method,
        url: _url,
    };

    request(options, function(err, results){
        callback(err, results);
    });

}

makeRequest("GET", "https://www.googleapis.com/books/v1/volumes?q=isbn:9780316036351", '', function(err, data){
    if(err) throw err;
    
    console.log(data);
});