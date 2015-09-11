$(document).ready(function() {

	/***************** Initiate Flexslider ******************/
	
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Nav Transformicon ******************/

	/* When user clicks the icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('div.navigation').addClass('fixed');
				$('header .actions').css({
					"top": "33px",
				});
			} else {
				$('div.navigation').removeClass('fixed');
				$('header .navicon').css({
					"top": "42px",
				});
			}
		});
	});

	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});
