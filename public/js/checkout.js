$(document).ready(function(){

var num = 1;

var v;
var pressed = false;
var chars = [];

var bookCheckouts = [];
console.log("very beginning: "+typeof bookCheckouts + " : " + typeof num);
$(".addBook").click(function(){

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


  if(num >= 3){
    console.log("Too many books!");
  }else{
    $(".row1").append(b);
  num ++;
}
});







$(window).keypress(function(e) {

  if (e.which >= 48 && e.which <= 57) {
      chars.push(String.fromCharCode(e.which));
  }


  // console.log(chars.length);

  // console.log(e.which + ":" + chars.join("|"));



for(var i = 0; i < 3; i ++){
  fillIn(i);
}





    pressed = true;
});

function fillIn(count){
  var url = "http://localhost:8080/book/api/book/",
      isbnVal = $("#checkout" + count).val(),
      book = url + isbnVal;


  $.getJSON(book, function(data){
    var a = data.results,
        title = a.title,
        author = a.author,
        img = a.img;
                        console.log("1: " + typeof bookCheckouts);
    $('.title' + count).text(title);
    $('.author' + count).text(author);
    $('.image' + count).attr("src", img);
    console.log(isbnVal + "??");
    $('#osis').val($("#user").text());

    if($("#checkout" + count).val().length <= 13 && bookCheckouts.includes(isbnVal)){
      console.log("test");
    }else{
      bookCheckouts.push(isbnVal);
      console.log("In The Array:  " + bookCheckouts + "isbn :" + isbnVal);
                console.log("2:" + typeof bookCheckouts);
      $("#booksArr").val(bookCheckouts);
          console.log("3:" + typeof bookCheckouts);
    }
    // console.log(bookCheckouts);
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
