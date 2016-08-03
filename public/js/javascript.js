$(document).ready(function(){
var a = '<select class="form-control optlist"><% for(var i = 0; i < genre.length; i++){<option value=""><%=genre[i].title%></option>%><%}%></select>';

  $('.200').hide();
  $('.300').hide();
  $('.add2').hide();

  $('.add').click(function(){
    $('.200').show();
    $(this).hide();
    $('.add2').show();
    console.log('what the fuck');
  });

  $('.add2').click(function(){
    $('.300').show();
    console.log('hey what up');
  });


  var genre = [
    "Science Fiction",
    "Satire",
    "Drama",
    "Action and Adventure",
    "Romance",
    "Mystery",
    "Horror",
    "Self Help",
    "Health",
    "Guide",
    "Travel",
    "Children's",
    "Religion, Spirituality & New Age",
    "Science",
    "History",
    "Math",
    "Anthology",
    "Poetry",
    "Encyclopedias",
    "Dictionary",
    "Comics / Manga",
    "Art",
    "Cookbooks",
    "Diary",
    "Journals",
    "Series",
    "Trilogy",
    "Biographies",
    "Autobiographies",
    "Fantasy"
  ];

  console.log(genre.length);
  console.log( genre.sort() );

  // CAN BE CONVERTED TO D-R-Y


  function createGenreOptions(){
    var l = genre.length,
        str = "<option>- Select Genre -</option>";

    for(var i = 0; i < l; i++) {
      str += "<option value='" + i + "'>" + genre[i]+ "</option>";
    }

    return str;
  }


  // D-R-Y
  function updateHTML(el, content){
    $(el).append(content);
  }


  updateHTML("#ddlGenres", createGenreOptions());


  // D-R-Y DESIGN PATTERN
  function clickResults(el, callback){
    $(el).change(callback);
  }

  clickResults("#ddlGenres", function(){
    // $(".dvSkills").append("<span>" + $("#ddlGenres option:selected").text() + ", </span>");
    $(".dvSkills").append("<input name = 'genre[] 'value='" + $("#ddlGenres option:selected").text() +"'/>");

    $("#hnSkills")[0].value += this.value + ",";

  });
});
