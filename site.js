$(document).ready(function(){

	$('#circle').hover(function(){
		// alert("You clicked the circle!");
		$('p').html("You clicked the circle!");
	})

	$('.square').click(function(){
		$(this).addClass('background', 'blue');
	})

	$(function() {
  	$('#draggable').draggable();
  })


})