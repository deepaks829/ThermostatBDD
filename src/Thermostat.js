$(document).ready(function() {
  $('#up').click(function(){
    var new_temp = parseInt($('#temperature').text()) + 1;
    $('#temperature').text(new_temp);
  });

  $('#down').click(function(){
    $('#temperature').text(parseInt($('#temperature').text()) - 1);
  });
});
