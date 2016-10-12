// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function contactInit(){
	geoCompleteWithMap();
	toggleEventDetailsForm();
	citySliderAndData();
}


function geoCompleteWithMap(){

	var mapStyles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];

	var options = {
	  map: ".map_canvas",
	  mapOptions: {
	    styles: mapStyles,
	    draggable: true,
	    scrollwheel: true
	  }
	};

	$(window).load(function(){
		$('#geocomplete').val('')
	})

	$("#geocomplete").on('keyup', function () {
	  $(this).geocomplete(options);
	});

	$("#geocomplete").on('blur', function () {
		if($(window).width() >  991){
			$('#map-container').css('position','relative')
			var map = $(".map-div");
			TweenLite.to(map, 0, {visibility: 'visible', position: 'relative'});
			$("#details-before").css({
				'width': '49%',
				'margin-right': '1%',
				'float': 'left'
			});
		}
	});
}


function toggleEventDetailsForm(){
	$('#adntl-info-toggle').click(function(){
		$(this).hide()
		$('#adntl-info-form').fadeIn()
		datePickerInit();
	})
}

function datePickerInit(){
  $("#datepicker").datepicker();
  $(document).on('page:change', function(){
    $.datepicker.initialized = false
	  $("#datepicker").datepicker();
  })
};

function citySliderAndData(){
	$('.locale').hover(function(){
		$('.pagination a').get($(this).data('index')).click()
		$('.locale').removeClass('active-locale')
		$(this).addClass('active-locale')
		if($(this).html().trim() == 'NYC'){
			$('.c-title').html('WORLD HEADQUARTERS')
		}else{
			$('.c-title').html('REGIONAL HEADQUARTERS')
		}
		$('#hq-subtitle').html($(this).data('hq'))
		$('#l-phone').html($(this).data('phone'))
		$('#l-phone').html($(this).data('phone'))
		$('#l-email').html($(this).data('email'))
		$('#l-address').html($(this).data('address'))
	})
}
