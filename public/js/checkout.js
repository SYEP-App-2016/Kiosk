$(document).ready(function(){

var num = 1;

var v;
var pressed = false;
var chars = [];

var isbn0 = "",
    isbn01 = "",
    isbn02 = "";

$(".addBook").click(function(){

  var b = '<div class="row2">\
      <div class="checkOut">\
          <div class="col-sm-3 col-md-3">\
               <a href="#" class="thumbnail">\
                <img src="">\
                <center>\
                  <input id="barcode0" ' + num +' type="text" placeholder="barcode scan"/>\
                </center>\
                </a>\
          </div>\
           <div class="col-sm-9 col-md-9">\
               <div class="info">\
                    <div class="col-sm-6 col-md-6">\
                      <h1>Title:</h1>\
                      <ul class="title0'+ num +'"></ul>\
                             <h1> Author: </h1>\
                      <ul class="author0' + num + '> Rick Riordan</ul>\
                         <h1>  Books Available:</h1>\
                      <ul>12/16 Copies</ul>\
                    </div>\
                    <div class="col-sm-3 col-md-3">\
                      <button type="button" class="btn btn-default btn-lg " aria-label="Left Align">\
                           <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>\
                     </button>\
                      <button type="button" class="btn btn-default btn-lg " aria-label="Left Align">\
                           <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\
                     </button>\
                    </div>\
               </div>\
           </div>\
      </div>\
  </div>'
  if(num >= 3){
    console.log("Too many books!");
  }else{
    $(".row").append(b);
  num ++;
}
});







$(window).keypress(function(e) {

  if (e.which >= 48 && e.which <= 57) {
      chars.push(String.fromCharCode(e.which));
  }


  console.log(chars.length);

  console.log(e.which + ":" + chars.join("|"));


  var isbn0 = "http://localhost:8080/book/api/book/" + $("#barcode0").val(),
      isbn01 = "http://localhost:8080/book/api/book/" + $("#barcode01").val(),
      isbn02 = "http://localhost:8080/book/api/book/" + $("#barcode02").val();


      $.getJSON(isbn0, function(data) {

        var a = data.results;
            title = a.title,
            author = a.author,
            img = a.img;

            console.log(title + " " + author + " " + img);

        $("#title0").val(title);
        $("#author0").text(author);

      });
  // $("#author0").val(author);
  // $("#title01").val(title);
  //
  // $("#title02").val(title);
  // $("#author02").val(author);



    pressed = true;
});



$("#barcode").keypress(function(e){
    if ( e.which === 13 ) {
        console.log("Prevent form submit.");
        e.preventDefault();
    }
});



function setFocus(){
  $("#barcode").focus();
  console.log("FOCUSED!");
}

$(document).focus(function(){
  $("#barcode").focus();
});

});
