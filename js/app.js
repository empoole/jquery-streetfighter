$(document).ready(function() {
	$('.ryu').mouseenter(function(event) {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(event) {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(event) {
		$('.ryu-ready').hide();
		playHadouken();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({'left': '1055px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '555px');
			});
	})
	.mouseup(function(event) {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
	$('html').keydown(function(event) {
		console.log("press");
		if(event.which == 88) {
			console.log("pressed x");
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		console.log("keyup");
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	});
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}