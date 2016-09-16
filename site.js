$(document).ready(function(){

	$('#circle').click(function(){
		// alert("You clicked the circle!");
		$('p').addClass('yellow-bg');
	});

	$('#circle').hover(function(){
		// alert("You clicked the circle!");
		$('p').html("You hovered over the circle!");
	});

	$('.square').click(function(){
		$(this).css('background', 'blue');
	});

	$(function() {
  	$('#draggable').draggable();
  });

	$(function() {
  	$('#resizable').resizable();
  });

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

})