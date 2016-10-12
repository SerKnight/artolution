function activeStudy() {
	$('.study').click(function(){
		$('.study').removeClass('active-case-study')
		$(this).addClass('active-case-study')
		document.title = $(this).find('.study-title').text() + " - Scratch Events";
	})
}
