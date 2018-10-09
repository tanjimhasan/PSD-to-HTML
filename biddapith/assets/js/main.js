jQuery(document).ready(function($){
	

	//sticky menu
	var element = $('.header-area')
	var navOffset = jQuery(".header-area").offset().top + element.outerHeight(true) ;

    jQuery(window).scroll(function(){

        var scrollpos = jQuery(window).scrollTop();

        if (scrollpos >= navOffset) {
            jQuery(".sticky").addClass("is-sticky");
        }else{
            jQuery(".sticky").removeClass("is-sticky");
        }

	});

	//Mobile Menu

	$("#edu-menu").slicknav({
		'prependTo': '#mobile-menu'
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
	$(window).on("load",function(){
		$("#preloader_1").fadeOut(3000);
	});
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
});