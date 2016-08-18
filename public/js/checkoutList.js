var bookCount;

$(document).ready(function(){

  bookCount = $("#bookCount").val();

  function makeRequest(isbn,num){
    var endPoint = "http://localhost:8080/book/api/book/" + isbn;
        console.log(endPoint);

    $.getJSON(endPoint, function(data){
      processData(data,num);
    });
  }

  function processData(results,num){
    var a = results.results;
    console.log(a.img);
    $('.title' + num).text(a.title);
    $('.author' + num).text(a.author);
    $('.image' + num).attr("src", a.img);

    // $('.image' + num).attr("src", a.img);
  }

  $(window).change(function(e) {

    if (e.which >= 48 && e.which <= 57) {
        chars.push(String.fromCharCode(e.which));
    }

    // var _isbn = $("#checkout").val();
    // makeRequest(_isbn);

    pressed = true;
  });

  function check(isbn1, isbn2)

  for(var i = 0; i < bookCount; i++){
    var _isbn = $("#isbn" + i).val();

    makeRequest(_isbn,i);
  }

  // $(".overlay").hide();

});
