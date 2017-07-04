$(document).ready(function() {
	$('#scroll-me').click(function(){
		$('body').animate({
			scrollTop: $('#portfolio').offset().top
		},'slow');
		)
	}
})