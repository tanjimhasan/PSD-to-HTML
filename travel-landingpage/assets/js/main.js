jQuery(document).ready(function($){

	
	$(".destination-lists").masonry();
	$(".site-testimonial").owlCarousel({
		items : 2,
		margin: 30,
		loop:true,
		nav:true,
		dots:false,
		navText: ["<i class='fas fa-arrow-left'></i>" , "<i class='fas fa-arrow-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				mouseDrag: true,
				dots: false
			},

			767: {
				items:2,
				nav: true,
			},

			1000: {
				items: 2,
			},

			1200: {
				items: 2,
			}
		}
		
	});
	$(".tour-type-list").owlCarousel({
		items : 2,
		margin: 30,
		loop:true,
		nav:true,
		dots:false,
		navText: ["<i class='fas fa-arrow-left'></i>" , "<i class='fas fa-arrow-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				mouseDrag: true,
				dots: false,
				nav: false,
			},

			540: {
				items:2,
				nav: false,
			},
			767: {
				items:2,
				nav: false,
			},

			1000: {
				items: 2,
			},

			1200: {
				items: 2,
			}
		}
	});
	$(".blog-slides").owlCarousel({
		items : 3,
		margin: 50,
		loop:true,
		nav:true,
		dots:false,
		navText: ["<i class='fas fa-arrow-left'></i>" , "<i class='fas fa-arrow-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				mouseDrag: true,
				dots: false
			},

			767: {
				items:2,
				nav: true,
			},

			1000: {
				items: 3,
			},

			1200: {
				items: 3,
			}
		}
		
	});
	$('[data-toggle="datepicker"]').datepicker();
	

	 $(".single-destination").magnificPopup({
         delegate: 'a', // child items selector, by clicking on it popup will open
 		 type: 'image'
    });

	 wow = new WOW(
	      {
	        animateClass: 'animated',
	        offset:       100,
	        callback:     function(box) {
	          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	        }
	      }
	    );
	    wow.init();

	    // smooth scroll
        $('li.smooth-menu a').smoothScroll({
        	offset: -66,
        	speed: 1200,
        	easing: 'easeInOutQuad'
        	
        });
       //sticky menu active
   		 $('.header-area').sticky({topSpacing: 0});
   		 
        //Check to see if the window is top if not then display button
	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 100) {
	            $('.scrollToTop').fadeIn();
	        } else {
	            $('.scrollToTop').fadeOut();
	        }
	    });

	    //Click event to scroll to top
	    $('.scrollToTop').click(function(){
	        $('html, body').animate({scrollTop : 0},900);
	        return false;
	    });
	    //Click event to scroll to top
	    $('.boxed-layout').click(function(){
	        $('html, body').animate({scrollTop : 0},100);
	        return false;
	    });
		$("#mopo-menu").slicknav({
			'prependTo': '#mobile-menu',
			'closeOnClick': true,
		});

		//layout changer
		$(".boxed-layout").on('click',function(){
			$("body").addClass('boxed-layout').removeClass('wide-layout');
			$('.layout-changer span').removeClass('active');
			$(this).addClass('active');
		});

		$(".wide-layout").on('click',function(){
			$("body").addClass('wide-layout').removeClass('boxed-layout');
			$('.layout-changer span').removeClass('active');
			$(this).addClass('active');
		});

		// timeout for loader
		setTimeout(function(){
	        $('body').addClass('loaded');
	    }, 2000);
});