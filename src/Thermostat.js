$('input#up').click(function(){
  $('#temperature').text(parseInt($('#temperature').text()) + 1);
});

$('input#down').click(function(){
  $('#temperature').text(parseInt($('#temperature').text()) - 1);
});
