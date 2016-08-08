// UTILITY / HELPER FUNCTION
function updateHTML(el, context) {
  $(el).append(context);
}

//
// HIGHLIGHT
// LOADED DATA FROM DB
// var spotlight = [
//   {
//     title: "Jungle Book",
//     img: "https://lumiere-a.akamaihd.net/v1/images/au_movie_poster_thejunglebook_ca930c48.jpeg?region=0%2C0%2C300%2C450",
//     teaser: "Disney Classic"
//   }, {
//     title: "Shingeki no Kyojin *Attack on Titan*",
//     img: "http://vignette4.wikia.nocookie.net/shingekinokyojin/images/b/b5/No_Regrets_Volume_1.png/revision/latest?cb=20150127135102",
//     teaser: "Awesome Read"
//   }, {
//     title: "Harry Potter: The Cursed Child",
//     img: "https://www.londonboxoffice.co.uk/images/shows/square-poster/resized/250x250/harry-potter-sq1.jpg",
//     teaser: "Follow up to a great series"
//   }
// ];

// PROCESS DATA
function loadCarousel(){
  var str = "";

  for(var i = 0; i < spotlight.length; i++) {
    str += "";

    if(i === 0) {
      str += '<div class="item active">';
    } else {
      str += '<div class="item">';
    }

    str += '<div class="fill" style="background-image:url(\'' + spotlight[i].img + '\');"></div>'
         + '<div class="carousel-caption"><h2>' + spotlight[i].title + '</h2><p>' + spotlight[i].teaser + '</p></div></div>';
  }
  return str;
}

// updateHTML(".carousel-inner", loadCarousel());




// DATA SECTION
var marketing = [{
  title: "The Insiders Guide To The Colleges",
  img: "http://recap.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/The-Insiders-Guide-to-the-Colleges-2015-Students-on-Campus-Tell-You-What-You-Really-Want-to-Know-Paperback-L9781250048066.jpg"
},{
  title: "Math for Dummies",
  img: "https://images-na.ssl-images-amazon.com/images/I/51Y5Ob4GZNL._SX258_BO1,204,203,200_.jpg",
  link: ""
},{
   title: "Unity 3 Game Development",
   img: "https://www.packtpub.com/sites/default/files/1123OT%20Unity%203D%20Game%20Development%20Hotshot_0.jpg",
   link: ""
}];


// PARSE DATA
function getMarketing() {
  var str = "";

  for(var i = 0; i < marketing.length; i++) {
    str += '<div class="col-md-4"><div class="panel panel-default"><div class="panel-body">'
         + '<img class="img-responsive img-portfolio img-hover" src="' + marketing[i].img + '" />'
         + '<p>' + "Some Light Description" + '</p>'
         + '<a href="#" class="btn btn-default pull-right">Read More >></a></div>'
         + '<div class="panel-footer">' + marketing[i].title + '</div></div></div>'
  }
  return str;
}

// updateHTML("#dvMarketing .col-lg-12", getMarketing());



// UI STARTUP
$('.carousel').carousel({
    interval: 5000 //changes the speed
});
