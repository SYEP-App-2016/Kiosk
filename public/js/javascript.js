$(document).ready(function(){
var a = '<select class="form-control optlist">\n<% for(var i = 0; i < genre.length; i++){\n <option value=""><%=genre[i].title%></option>%><%\n}%>\n</select>';

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
});
