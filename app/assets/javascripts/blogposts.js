function blogPostInit(){
	sidebarSticky();
}

function sidebarSticky() {

	// if ($(window).width() < 1091) {
	// 	$("#sidewall-blog-index").removeClass("sidewall-blog-index-active")
	// } else {
	// 	$("#sidewall-blog-index").addClass("sidewall-blog-index-active")
	// }
	
	$(window).scroll(function(){
		if ($(window).width() > 1091) {
			if ($(window).scrollTop() > 150) {
				$("#sidewall-blog-index").addClass("sidewall-blog-index-active")
			} else {
				$("#sidewall-blog-index").removeClass("sidewall-blog-index-active")
			}
		}
	});

	$(window).resize(function(){
		if ($(window).width() < 1091) {
			$("#sidewall-blog-index").removeClass("sidewall-blog-index-active")
		} else {
			$("#sidewall-blog-index").addClass("sidewall-blog-index-active")
		}
	})

}


