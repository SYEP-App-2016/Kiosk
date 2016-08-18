var v;


    var pressed = false;

    var chars = [];


    $(window).change(function(e) {

        if (e.which >= 48 && e.which <= 57) {
            chars.push(String.fromCharCode(e.which));
        }

      console.log(chars.length);

      console.log(e.which + ":" + chars.join("|"));
      var isbn = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + $("#barcode").val() + "&key=AIzaSyDOT2-jMtatkBgfVLqSNrJ-angfpNbP2c4";


      $.getJSON(isbn, function(data) {
        var a = data.items[0],
            info = a.volumeInfo,
            title = info.title,
            author = info.authors[0],
            publisher = info.publisher,
            description = info.description,
            pageCount = info.pageCount,
            rating = info.averageRating,
            genre = info.categories,
            image = info.imageLinks,
            thumbnail = image.thumbnail,
            sThumbnail = image.smallThumbnail,
            isbn = $("#barcode").val();

        $("#title").val(title);
        $("#author").val(author);
        $("#summary").val(description);
        $("#publisher").val(publisher);
        $("#image").val(thumbnail);
        $("#pageCount").val(pageCount);
        $("#sImage").val(sThumbnail);
        $("#genre").val(genre);
        $("#isbn").val(isbn);



      });

      var osis = $(".osis").val(),
          cid = $(".cid").val();

      $("#osis").val(osis);
      $("#cid").val(cid);

      // if (pressed == false) {
      //
      //   setTimeout(function(){
      //
      //       if (chars.length >= 10) {
      //
      //         v = chars.join("");
      //
      //           var barcode = chars.join("");
      //
      //           console.log("Barcode Scanned: " + barcode);
      //
      //         console.log("??:" +v);
      //         $("#barcode").val(barcode);
      //       }
      //       $("#barcode").val("");
      //       chars = [];
      //       pressed = false;
      //   },400);
      // }

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
