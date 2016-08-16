$(document).ready(function(){

var num = 1;

var v;
var pressed = false;
var chars = [];

var bookCheckouts = [];

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

  var form = '<form method="POST" action = "Checkout">\
    <input id = "count" name="count" type="Number" class="form-control" style="display: none;" value="0"/>\
    <input id = "isbn" name="isbn" type="String" class="form-control" style="display: none;"/>\
    <input id = "osis" name="osis" type="String" class="form-control" style="display: none;"/>\
    <input class="btn btn-default btn-warning" type="submit" value="Checkout">\
  </form> ';


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


  console.log(chars.length);

  console.log(e.which + ":" + chars.join("|"));



for(var i = 0; i < 7; i ++){
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

    $('.title' + count).text(title);
    $('.author' + count).text(author);
    $('.image' + count).attr("src", img);
    console.log(isbnVal + "??");
    $('#isbn').val(isbnVal);
    $('#osis').val($("#user").text());

    if($("#checkout" + count).val().length <= 13 && bookCheckouts.includes(isbnVal)){
      console.log("test");
    }else{
      bookCheckouts.push(isbnVal);
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
