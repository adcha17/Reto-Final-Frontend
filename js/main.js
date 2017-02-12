$(document).ready(function() {
	

	$('.url').click(function(event) {
		
		var href = $(this).attr('href');
		$('.active').removeClass('active');
		$(href).attr('class', 'active');
		
	});
	

	$('.carousel.carousel-slider').carousel({fullWidth: true});
	autoplay();
	
});
   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3000);
}
