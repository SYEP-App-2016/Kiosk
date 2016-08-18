// var request = require("request");

// IN PROCESS

module.exports = {
    isLoggedIn: function(req, res, next){
        console.log(req.user);
        if(req.isAuthenticated())
            return next();
        res.redirect('user/login');
    }
};

// function makeRequest(_method, _url, _params, callback){
//
//     var options = {
//         method: _method,
//         url: _url,
//     };
//
//     request(options, function(err, results){
//         callback(err, results);
//     });
//
// }
//
// makeRequest("GET", "https://www.googleapis.com/books/v1/volumes?q=isbn:9780316036351", '', function(err, data){
//     if(err) throw err;
//
//     console.log(data);
// });
