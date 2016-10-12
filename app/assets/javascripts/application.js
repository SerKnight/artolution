// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require turbolinks
//= require jquery_ujs
//= require bootstrap
//= require modernizer.custom
//= require scroll_plugin.js
//= require jquery.geocomplete
//= require jquery-ui.js
//= require extra.slider.min.js
//= require grizdy-1.1.min.js
//= require jquery.blueimp-gallery.min

//= require_tree .

var ready;
ready = function() {
  homepageInit();
  globalInit();
  homeSetup();
};


document.addEventListener("turbolinks:load", function() {
	$(document).ready(ready);
	$(document).on('page:load', ready);
})


function homeSetup() {

  var navHeight = $(window).height();

  // transition: background-color 0.5s ease;
  if(window.location.pathname != '/'){
    $('.navbar-default').css({
      'transition': 'all 0.75s ease',
      'background-color': '#000'
    })
  }

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > navHeight || window.location.pathname != '/') {
      $('.navbar-default').css({
        'transition': 'all 0.75s ease',
        'background-color': '#000'
      })
    } else {
      $('.navbar-default').css({
        'transition': 'all 0.75s ease',
        'background-color': 'transparent'
      })
    }
  });
};