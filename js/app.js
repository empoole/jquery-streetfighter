$(document).ready(function() {
	$('.ryu').hover(function(event) {
		$('.ryu-still').toggle();
		$('.ryu-ready').toggle();
	})
	.mousedown(function(event) {
		$('.ryu-ready').toggle();
		playHadouken();
		$('.ryu-throwing').toggle();
		$('.hadouken').finish().show()
		.animate({'left': '1055px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '555px');
			});
	})
	.mouseup(function(event) {
		$('.ryu-ready').toggle();
		$('.ryu-throwing').toggle();
	});
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}