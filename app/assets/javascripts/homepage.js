function homepageInit(){
	ajaxLoader();
	seeMoreScroll();
	youtubeEmbed();
	faceAndMapToggle();
}



function seeMoreScroll(){
	$('.see-more img').click(function(){
		TweenLite.to(window, 1.2, {scrollTo:{y: $('.hero-image-banner').height(), x:0}, ease:Power2.easeOut});
	})

	$('.see-more img').mouseover(function(){
		TweenMax.to($('.see-more img'), 0.4, {scale:1.1, ease:Bounce.easeOut})
	  TweenMax.to($('.see-more img'), 0.2, {scale:1, delay:0.4})
	})
	setTimeout(function(){
		TweenMax.to($('.see-more img'), 0.4, {scale:1.2, ease:Bounce.easeOut})
	  TweenMax.to($('.see-more img'), 0.2, {scale:1, delay:0.4})
	}, 1200)

}


function ajaxLoader(){
	$(document).ajaxStart(function(){ 
	  $('#loader-overlay').show()
	})

	$(document).ajaxStop(function(){ 
		setTimeout(function(){
			$('#loader-overlay').fadeOut() 
		},250)
	})
}

function youtubeEmbed(){
	(function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));
	$(document).ready(function(){
		$('.youtube-video').on('click', function(e){
			$('#navigation-container').hide()
			$('#close-video').show()
			var bar1 = $('#close-video .bar').first()
			var bar2 = $('#close-video .bar').last()
			TweenLite.to($('#close-video .long-bar'), 0.1, { opacity: 0 })
		 	TweenLite.to(bar1, 0.3, {rotation: -45, top: 12, width: 65, borderBottom: '3px solid #fff' });
		 	TweenLite.to(bar2, 0.3, {rotation: 45, top: -15, width: 65, borderBottom: '3px solid #fff' });
	   	$('#menu-text').css('color','#e5e5e5');
			var queryString = $(this).data('youtube-src').slice( $(this).data('youtube-src').indexOf('?') + 1);
			var queryVars = $.parseQuery( queryString );
			if ( 'v' in queryVars ){
				e.preventDefault();
				var vidHeight = $(window).height() * 0.8; // default
				var vidWidth = vidHeight / 0.609375; // default
				if( $(window).width() < 991 ){
					var vidHeight = 315; // default
					var vidWidth = 560; // default
				}
				var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+  queryVars['v'] +'?autoplay=1&rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
				$('#video-modal .modal-body').html(iFrameCode);
			}
		});

		$('#video-modal, .in, #close-video').click(function(){
			$('.modal-body').html('')
			$('#navigation-container').show()
			$('#close-video').hide()
		})
		$('#close-video').click(function(){
			$('#navigation-container').show()
			$('#video-modal').modal('hide')
		})
	}); 
}

function faceAndMapToggle(){
	$('#map, .talent-right').off().hover(function(){
		TweenLite.to($('#map'), 1.5, { left: '-15%', opacity: 0.25, 'background-size': '80%'});
		TweenLite.to($('#faces'), 1.5, { right: '-35%'});
		TweenLite.to($('.talent-right'), 1.5, {display: 'block'});
		TweenLite.to($('.talent-right'), 0.75, {opacity: 1, left: -25 });
	}, function(){
		TweenLite.to($('#map'), 1.5, { left: '-25%', opacity: 0.75, 'background-size': '86%'});
		TweenLite.to($('#faces'), 1.5, { right: '-25%'});
		TweenLite.to($('.talent-right'), 0, {display: 'none'});
		TweenLite.to($('.talent-right'), 0.75, {left: '7.5%' });
	})

	$('#faces, .talent-left').off().hover(function(){
		TweenLite.to($('#faces'), 1.5, { right: '-15%', opacity: 0.25, 'background-size': '59%'});
		TweenLite.to($('#map'), 1.5, { left: '-35%'});
		TweenLite.to($('.talent-left'), 1.5, {display: 'block'});
		TweenLite.to($('.talent-left'), 0.75, {opacity: 1, left: '7.5%' });
	}, function(){
		TweenLite.to($('#faces'), 1.5, { right: '-25%', opacity: 0.75, 'background-size': '65%'});
		TweenLite.to($('#map'), 1.5, { left: '-25%'});
		TweenLite.to($('.talent-left'), 0, {display: 'none'});
		TweenLite.to($('.talent-left'), 0.75, {left: '0%' });
	})	  	
}
