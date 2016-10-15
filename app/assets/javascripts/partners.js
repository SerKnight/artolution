function partnersInit(){

	$('.team-member').hover(function(){
		var bg = $(this).find('.team-member-background')
		var copy = $(this).find('.member-copy')
		var quote = $(this).find('.quote')

		TweenLite.to(bg, 1, {opacity: 0.5 });
		TweenLite.to(copy, 0.4, {bottom: '20%', opacity: 1});
		TweenLite.to(quote, 0.25, {visibility: 'visible'});


	}, function(){

		var bg = $(this).find('.team-member-background')
		var quote = $(this).find('.quote')
		var copy = $(this).find('.member-copy')

		TweenLite.to(bg, 0.3, {opacity: 0.75 });
		TweenLite.to(copy, 0.25, {bottom: '10%', opacity: 0.75});
		TweenLite.to(quote, 0.25, {visibility: 'hidden'});

	})
}