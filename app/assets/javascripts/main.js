
function main() {

  pictureGridInit('.gridzy');
  scrollSpyToggle();
  homeSetup();
  sizeHomepageHero();
}


function homeSetup() {
  var navHeight = $(window).height() - 300;

  $(window).load(function() { 
    if ($(window).scrollTop() > navHeight ) {
      $('.navbar-brand') //.css('padding-top','35px')
    } else {
      $('.navbar-brand') //.css('padding-top','15px')
    }
  })

  // set it before
  $('.header-elements').css({
    'padding-top': '20px',
    'padding-bottom': '20px'
  })

  
  $('.navbar-brand').css({
    'padding-top':'30px',
    'font-size': '2em'
  })


  if( $(window).width() < 991 ){
    $(".navbar-brand").css({
      'padding-top': '15px',
      'font-size': '1em'
    })
  }


  $(window).bind('resize', function() {
  if( $(window).width() < 750 ){
      $(".navbar-brand").css({
        'padding-top': '15px',
        'font-size': '1em'
      })
    } 
  })

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > navHeight || window.location.pathname != '/') {
      // im below hero
      $('.navbar-default').addClass('on');
      $('.header-elements').css({
        'padding-top': '5px',
        'padding-bottom': '5px'
      })
      $('.navbar-brand').css({
        'padding-top':'22px',
        'font-size': '1.5em'
      });
      $('.page-scroll').css({
        'font-size': '15px'
      })
      if( $(window).width() < 991 ){
        $(".navbar-brand").css({
          'padding-top': '15px',
          'font-size': '1em'
        })
      }

    } else {

      $('.navbar-default').removeClass('on');
      $('.header-elements').css({
        'padding-top': '20px',
        'padding-bottom': '20px'
      })
      $('.navbar-brand').css({
        'padding-top': '30px',
        'font-size': '2em'
      })
      $('.page-scroll').css({
        'font-size': '18px'
      })
      if( $(window).width() < 991 ){
        $(".navbar-brand").css({
          'padding-top': '15px',
          'font-size': '1em'
        })
      }
    }
  });

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });
}


function scrollSpyToggle(){
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
  });
}



function pictureGridInit(instigator){
  
  $(instigator).gridzy({
    // options go here
    // as an example, space between elements is set to 5 pixel.
    desiredElementHeight: 300,
    spaceBetweenElements: 5
  });  
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


function sizeHomepageHero(){
  $('.homepage-hero-container').height($(window).height())
}


