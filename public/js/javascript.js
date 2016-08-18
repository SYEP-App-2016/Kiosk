$(document).ready(function(){


  function updateHTML(el, content){
  $(el).append(content);
}

function clickResults(el, callback){
  $(el).change(callback);
}




//
// KIOSK CODE
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

// USUAL SETUP
// GET HOW MANY ELEMENTS
console.log(genre.length);


// SORT ALPHABETICALLY
console.log( genre.sort() );


// STRING BUILDER THAT RETURNS STRING
function createGenreOptions(){
  var l = genre.length,
      str = "<option>- Select Genre -</option>";

  for(var i = 0; i < l; i++) {
    str += "<option value='" + i + "'>" + genre[i]+ "</option>";
  }
  return str;
}


// EVENT LISTENER
clickResults("#ddlGenres", function(){

  console.log( $("#ddlGenres option:selected").text() );
  // PRINT GENRES IN DIV
  $(".dvSkills").append("<input name='genre[]' value='"+$("#ddlGenres option:selected").text() + "' style='display: none;' />");

  // GET NUMBER VALUE / POSITION IN ARRAY
  // $("#hnSkills")[0].value += this.value + ",";
});


// FIND BY CLASS / ID AND SET CONTENT
updateHTML("#ddlGenres", createGenreOptions());
            $('.menu-btn').click(function(){
                $('nav').toggleClass('open');
                $(this).toggleClass('close-btn');
                $('.c2').toggle();
            });

});
