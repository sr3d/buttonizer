// Start SimpleSlide

$(document).ready( function(){ simpleSlide(); });

// Fade links

$(function () {
	$('.fade').hover(function() {
		$(this).fadeTo("fast", 1);
	}, function() {
		$(this).fadeTo("75", 0.5);
	});

});