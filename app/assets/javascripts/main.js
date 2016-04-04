function main() {

  var navHeight = $(window).height() - 300;

  $(window).load(function() { 
    if ($(window).scrollTop() > navHeight ) {
      $('.navbar-brand').css('padding-top','35px')
    } else {
      $('.navbar-brand').css('padding-top','15px')
    }
  })

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > navHeight || window.location.pathname != '/') {
      $('.navbar-default').addClass('on');
      $('.header-elements').css({
        'padding-top': '0px',
        'padding-bottom': '0px'
      })
      $('.navbar-brand').css('padding-top','15px');
    } else {
      $('.navbar-default').removeClass('on');
      $('.header-elements').css({
        'padding-top': '20px',
        'padding-bottom': '20px'
      })
      $('.navbar-brand').css('padding-top','35px')
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

  pictureGridInit('.gridzy');
  scrollSpyToggle();
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



$(document).ready(function (){
  main()
})
