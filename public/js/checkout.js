$(document).ready(function(){

var num = 0;

var v;
var pressed = false;
var chars = [];


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
                      <div class = "title0'+num+'" type="text"></div>\
                             <h1> Author: </h1>\
                      <div class = "author0'+num+'" type="text"></div>\
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
  if(num >= 2){
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

  var url = "http://localhost:8080/book/api/book/";

  // var isbn = [url + $("#barcode00").val(), url + $("#barcode01").val(), url + $("#barcode02").val()];
    for(var i = 0; i < 3; i++){
        console.log(i + "? :" + url + $("#barcode0" + i).val());
      $.getJSON(url + $("#barcode0" + i).val(), function(data) {

        var a = data.results,
            title = a.title,
            author = a.author,
            img = a.img;

            console.log(title + " " + author + " " + img + isbn[i]);

        $(".title0" + i).val(title);

        $(".author0" + i).val(author);

      });
    }



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
