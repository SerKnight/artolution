
function main() {

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar-default').addClass('on');
    } else {
      $('.navbar-default').removeClass('on');
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
