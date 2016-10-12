function globalInit(){
	navigationColorToggle();
	// chatInit();
}


function navigationColorToggle(){
	var toggleHeight = $('.hero-image-banner').height();
	$(window).scroll(function(){
		if( !$('.overlay').hasClass('open') ){
			if( $(window).scrollTop() > (toggleHeight - 100) ){
				$('#trigger-overlay .bar').addClass('black-border')
				$('#trigger-overlay #menu-text').addClass('black')
			} else {
				$('#trigger-overlay .bar').removeClass('black-border')
				$('#trigger-overlay #menu-text').removeClass('black')
			}
		}			
	})
}

function studyToggle(){
	$('.close-study').click(function(){
	  $('#current-case-study').slideUp()
	  $('#current-case-study').html('')
	  $('.study').removeClass('active-case-study')
	  history.pushState(null, "<%= @current_study['headline'] %>", '/' + window.location.pathname.split('/').slice(1,3).join('/') );
		document.title = $(".hero-headline").next().text() + " Services - Scratch Events"
	  var height = $('.hero-container').height() + 
	  $('#service-show-container').height() + 
	  $('.capabilities-container').height()
	  TweenLite.to(window, 1.2, {scrollTo:{y: height + 50, x:0}, ease:Power2.easeOut});
	})
}


function chatInit(){

	// are we in biz hour operation? 
	now = new Date()
	var nowHour = now.getHours()
	var nowDay = now.getDay()
	if (nowDay != 0 && nowDay != 6) {
		if (nowHour >= 9 && nowHour <= 18) {
			if($(window).width() > 991){
				setTimeout(function(){
					Smooch.init({
						appToken: '2ktgmu8t27j63p17oth5pjljm'
					})
				}, 5000)
			}
		}
	} else {
		console.log('Off Hours.. No Live chat.. Email us at techteam@scratch.com')
	}

  hideSmooch();

	$(window).scroll(function() {
	  hideSmooch();
	});

	$(window).resize(function(){
		if( $(window).width() < 991 ){
			$('#sk-holder').remove()
			$('body').css('overflow-y', 'scroll')
		}
	})

}

function hideSmooch(){
  if( $(window).scrollTop() + $(window).height() >= $(document).height() - 200 ) {
    $('#sk-holder').hide()
  } else if($(window).scrollTop() < 250) {
    $('#sk-holder').hide()
  } else {
    $('#sk-holder').fadeIn()
  }
}