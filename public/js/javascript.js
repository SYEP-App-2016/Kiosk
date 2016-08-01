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


// COULD BE CLEANER IN JQUERY
var inputs = 0;

function createInput(){

  var i = $("#dvSkillsSection div:last-child");

  $("button span:last-child").attr("class", "glyphicon glyphicon-minus");


  $("button:last-child").attr("onclick", "removeInput(" + inputs + ")");

  var newInput =  document.createElement("div");

  var c = document.createAttribute("class");
      c.value = "col-lg-8 div-" + (++inputs);
  var d = document.createAttribute("data-input");
      d.value = inputs;

  newInput.setAttributeNode(c);
  newInput.setAttributeNode(d);

  newInput.innerHTML = '<div class="input-group"><input type="text" class="form-control" name="skills[]" placeholder="Enter skill"/><span class="input-group-btn"> <button id="btnNewSkill"  type="button" class="btn btn-default" aria-label="Left Align" onclick="createInput()"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button></span></div>';

    var section  = document.getElementById("dvSkillsSection");

    section.appendChild(newInput);
}

function removeInput(pos) {

  $("#dvSkillsSection div")[pos].remove('div-' + pos);

}



// var v = $("[name='skills[]']")[4]
// v.value
