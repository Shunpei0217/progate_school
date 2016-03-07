$(function() {

	$('#read-more').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').text('もっと詳しく');
			$('#detail-description').fadeOut();
		} else {
			$(this).addClass('active').text('閉じる');
			$('#detail-description').fadeIn();
		};
	});

	$('.languages-box').hover(
		function() {
			$(this).find('p').fadeIn(500);
		},
		function() {
			$(this).find('p').fadeOut(500);
		});

	$('.column-image').hover(function() {
		$(this).addClass('zoom');
		$(this).children('.zoom-black').fadeIn(300);
	},
	function() {
		$(this).removeClass('zoom');
		$(this).children('.zoom-black').fadeOut(300);
	});
});