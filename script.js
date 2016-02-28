$(function() {
	$('.languages-box').hover(
		function() {
			$(this).find('p').fadeIn();
		},
		function() {
			$(this).find('p').fadeOut();
		});
});