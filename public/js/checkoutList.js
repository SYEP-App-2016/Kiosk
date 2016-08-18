var bookCount,
    gNum,
    gBooks;


$(document).ready(function(){

$(".overlay").hide();
$(".confirm").hide();

  bookCount = $("#bookCount").val();

  var arr = $("#books").val(),
      books = arr.split(",");
      gBooks = books;

  function makeRequest(isbn,num){
    var endPoint = "http://localhost:8080/book/api/book/" + isbn;
        // console.log(endPoint);

    $.getJSON(endPoint, function(data){
      processData(data,num);
    });
  }

  function processData(results,num){
    var a = results.results;
    // console.log(a.isbn);
    $('.overlay' + num).hide();
    $('.title' + num).text(a.title);
    $('.author' + num).text(a.author);
    $('.isbn' + num).text(a.isbn);
    $('.image' + num).attr("src", a.img);

  }

  $(window).change(function(e) {

    if (e.which >= 48 && e.which <= 57) {
        chars.push(String.fromCharCode(e.which));
    }

    var _isbn = $("#checkout").val(),
        index = gBooks.indexOf(_isbn);

    for(var i = 0; i < gBooks.length; i++){
      if(check(_isbn,gBooks[i]) === true){
        console.log(gBooks + " :: " + index);

        gBooks.splice(index,1);
        console.log(gBooks);
        var x = 0;

        while(x < gBooks.length){
          $(".dvSkills").append("<input id= 'booksArr' name='booksArr[]' value='"+ gBooks[x] + "' style='display: none;' />");
          x++
        }

        $(".confirm").show();
        // for(var x = 0; i < gBooks.length;x++){
          // $(".dvSkills").append("<input id= 'booksArr' name='booksArr[]' value='"+ gBooks[x] + "' style='display: none;' />");
        // }
      }else{
        console.log("miss");
      }
    }




    pressed = true;
  });

  function check(isbn1, isbn2){
    if(isbn1 == isbn2){
      return true
    }else{
      return false
    }
  }

$(".btn").click(function(){
  $(".overlay").show();
});



  for(var i = 0; i < bookCount; i++){
    var _isbn = $("#isbn" + i).val();

    makeRequest(_isbn,i);
  }

  // $(".overlay").hide();

});
