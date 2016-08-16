var bookCheckouts = [];

$(document).ready(function(){

var num = 1;
var v;
var pressed = false;
var chars = [];

console.log("very beginning: "+typeof bookCheckouts + " : " + typeof num);

$(".addBook").click(function(){

});


function addSection(){

  if(bookCheckouts.length >= 2){
    alert(11);
    console.log("Too many books!");
  } else {

    var b = '<div class="row">\
        <div class="checkOut">\
            <div class="col-sm-3 col-md-3">\
                 <a href="#" class="thumbnail">\
                  <img class = "image' + num +'" src="">\
                  <center>\
                    <input id="checkout' + num +'"  type="text" placeholder="barcode scan"/>\
                  </center>\
                  </a>\
            </div>\
              <div class="info">\
                  <div class="col-sm-6 col-md-6">\
                    <h1>Title:</h1>\
                    <div class = "title'+num+'" type="text"></div>\
                    <h1> Author: </h1>\
                    <div class = "author'+num+'" type="text"></div>\
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
    </div>';

    $(".row1").append(b);
    num++;
 }

}

// $(window).keypress(function(e) {
$(window).change(function(e) {

  addSection();

  if (e.which >= 48 && e.which <= 57) {
      chars.push(String.fromCharCode(e.which));
  }

  var _isbn = $("#checkout").val();
  makeRequest(_isbn);

  pressed = true;
});


function processData(results){

  var a = results.results;

    $('.title' + num).text(a.title);
    $('.author' + num).text(a.author);
    $('.image' + num).attr("src", a.img);

    // $('#osis').val($("#user").text());

    if(a.isbn == $("#checkout").val()) {
      console.log("MATCH");
    } else {
      console.log("NOT");
      console.log($("#checkout").val() + " " + a.isbn );
    }

    bookCheckouts.push(a.isbn);

    reset();
}

function reset(){
  $("#checkout").val("");
}

function makeRequest(isbn){
  var endPoint = "http://localhost:8080/book/api/book/" + isbn;
      console.log(endPoint);

      // isbnVal = $("#checkout" + count).val(),
      // book = url + isbnVal;

  // console.log( $("#checkout" + count).val() );

  $.getJSON(endPoint, function(data){
    processData(data);
  });
}


$("#checkout").keypress(function(e){
    if ( e.which === 13 ) {
        console.log("Prevent form submit.");
        // e.preventDefault();
    }
});



// function setFocus(){
//   $("#checkout").focus();
//   console.log("FOCUSED!");
// }



// $(document).focus(function(){
//   $("#checkout").focus();
// });

});
