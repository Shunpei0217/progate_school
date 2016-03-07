$(function() {
	//もっと詳しくボタン
	$('#read-more').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').text('もっと詳しく');
			$('#detail-description').fadeOut();
		} else {
			$(this).addClass('active').text('閉じる');
			$('#detail-description').fadeIn();
		};
	});

	//学習する言語
	$('.languages-box').hover(
		function() {
			$(this).find('p').fadeIn(500);
		},
		function() {
			$(this).find('p').fadeOut(500);
		});

	//コラム画像
	$('.column-image').hover(function() {
		$(this).addClass('zoom');
		$(this).children('.zoom-black').fadeIn(300);
	},
	function() {
		$(this).removeClass('zoom');
		$(this).children('.zoom-black').fadeOut(300);
	});

	//コラム整理
	$('.filter-item').click(function() {
		$('.filters-wrapper').find('.active').removeClass('active');
		$(this).addClass('active');
		if ($(this).hasClass('filter-all')) {
			$('.column-box').fadeIn();
		} else if ($(this).hasClass('filter-column')) {
			$('.column').fadeIn();
			$('.tip').fadeOut();
		} else {
			$('.column').fadeOut();
			$('.tip').fadeIn();
		};
	});
	
});











