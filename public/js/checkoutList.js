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

  for(var i = 0; i < bookCount; i++){
    var _isbn = $("#isbn" + i).val();

    makeRequest(_isbn,i);
  }
});
