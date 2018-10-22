jQuery(document).ready(function($){

	/*---------------------
		Shipping Form Toggle
	------------------------*/

	$('[data-shipping]').on('click', function () {
		if ($('[data-shipping]:checked').length > 0) {
			$('#shipping-address-form').slideDown();
		} else {
			$('#shipping-address-form').slideUp();
		}
	});

	/*---------------------
	change password form toggle
	------------------------*/

	$('[change-password]').on('click', function () {
		if ($('[change-password]:checked').length > 0) {
			$('.change-password-form').slideDown();
		} else {
			$('.change-password-form').slideUp();
		}
	});

	/*---------------------
	change Address form toggle
	------------------------*/

	$('[change-address]').on('click', function () {
		if ($('[change-address]:checked').length > 0) {
			$('.change-address-form').slideDown();
		} else {
			$('.change-address-form').slideUp();
		}
	});

	/*---------------------
		sticky header
	------------------------*/

	var element = $('.header-middle')
	var navOffset = jQuery(".header-middle").offset().top + element.outerHeight(true) ;

    jQuery(window).scroll(function(){

        var scrollpos = jQuery(window).scrollTop();

        if (scrollpos >= navOffset) {
            jQuery(".sticky").addClass("is-sticky");
        }else{
            jQuery(".sticky").removeClass("is-sticky");
        }

	});

    /*---------------------
		scroll to top
		check windows position
	------------------------*/
	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 100) {
	            $('.scrollToTop').fadeIn();
	        } else {
	            $('.scrollToTop').fadeOut();
	        }
	    });

	    /*---------------------
		Click event to scroll to top
		------------------------*/

	    $('.scrollToTop').click(function(){
	        $('html, body').animate({scrollTop : 0},900);
	        return false;
	    });

	/*---------------------
		home slider 
	------------------------*/

	$(".home-top-slider").slick({
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
	});

	/*---------------------
		Client slider 
	------------------------*/

	$(".client-testimonial").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
	});

	/*---------------------
		product  slider 
	------------------------*/

	$(".product-slide-list").slick({
		prevArrow: '<i class="fa fa-angle-left slick-prev-btn"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]

	});

	/*---------------------
		product  slider two 
	------------------------*/

	$(".product-slide-list-two").slick({
		prevArrow: '<i class="fa fa-angle-left slick-prev-btn"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]

	});

	/*---------------------
		brand logo slider 
	------------------------*/

	$(".company-logo-list").slick({
		infinite: true,
		slidesToShow: 6,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
	]
	});

	/*---------------------
	Quick view tab-menu slider 
	------------------------*/

	$('.single-tab-menu').slick({
		prevArrow: '<i class="fa fa-angle-right slick-prev-btn"></i>',
		nextArrow: '<i class="fa fa-angle-left slick-next-btn"></i>',
		slidesToShow: 3,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});

	/*---------------------
		Tab  
	------------------------*/

	$('.modal').on('shown.bs.modal', function (e) {
		$('.single-tab-menu').resize();
	})

	$('.single-tab-menu a').on('click', function (e) {
		e.preventDefault();

		var $href = $(this).attr('href');
		$('.single-tab-menu a').removeClass('active');
		$(this).addClass('active');

		$('.product-details-large .tab-pane').removeClass('active show');
		$('.product-details-large ' + $href).addClass('active show');

	});

	/*---------------------
	product-sidebar slider 
	------------------------*/

	$(".product-sidebar").slick({
		infinite: true,
		vertical: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 3,

	});

	/*---------------------
	vertical-product-slider 
	------------------------*/

	$(".vertical-product-slider").slick({
		prevArrow: '<i class="fas fa-angle-down slick-prev-btn"></i>',
		nextArrow: '<i class="fas fa-angle-up slick-next-btn"></i>',
		infinite: true,
		vertical: true,
		slidesToShow: 3,

	});

	$(".horizontal-double-row-product").slick({
		prevArrow: '<i class="fas fa-angle-left slick-prev-btn"></i>',
		nextArrow: '<i class="fas fa-angle-right slick-next-btn"></i>',
		slidesToShow: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]

	});

	/*---------------------
		category  Menu
	------------------------*/

	$(".category-weidget-body li a").on('click',function(){
		$(".category-weidget-body li a").removeClass('active');
		$(this).addClass('active');
		return false;
	});
	/*---------------------
	active search on small device
	------------------------*/

	$(".search-icon").on('click', function(){
		$(".header-search-form").addClass('show');
		$(".shadow-class").addClass('active');
	})
	$(".shadow-class").on('click', function(){
		$(".shadow-class").removeClass('active');
		$(".header-search-form").removeClass('show');
	})

	/*---------------------
		Mobile Menu
	------------------------*/

	var mainMenuNav = $('.main-menu nav');
	mainMenuNav.meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu',
		meanMenuClose: '<span class="menu-close"></span>',
		meanMenuOpen: '<span class="menu-bar"></span>',
		meanRevealPosition: 'right',
		meanMenuCloseSize: '0',
	});
	
	$('.modal').on('shown.bs.modal', function (e) {
		$('.single-slide-menu').resize();
	});


	$('.view-mode a').on('click', function (e) {
		e.preventDefault();

		var shopProductBox = $('.shop-product-box');
		var viewMode = $(this).data('target');

		$('.view-mode a').removeClass('active');
		$(this).addClass('active');
		if (viewMode == "list") {
			shopProductBox.removeClass('column-five');
		} else {
			shopProductBox.addClass('column-five');
		}
		shopProductBox.removeClass('grid list').addClass(viewMode);
	});

	/*---------------------
		Cart Quantity
	------------------------*/

	$('.cart-product-qty').append('<a href="#" class="inc qty-btn-cart"><i class="fa fa-plus"></i></a>');
	$('.cart-product-qty').prepend('<a href="#" class= "dec qty-btn-cart"><i class="fa fa-minus"></i></a>');
	$('.qty-btn-cart').on('click', function (e) {
		e.preventDefault();
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();

		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;

		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);

	});

	/*---------------------
		 Quantity
	------------------------*/

	$('.pro-qty').append('<a href="#" class="inc qty-btn mr-5"><i class="fa fa-plus"></i></a>');
	$('.pro-qty').append('<input type="text" value="1" class="mr-5">');
	$('.pro-qty').append('<a href="#" class= "dec qty-btn"><i class="fa fa-minus"></i></a>');
	$('.qty-btn').on('click', function (e) {
		e.preventDefault();
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

	/*---------------------
	Payment Method Select
	------------------------*/

	$('[name="payment-action"]').on('click', function () {

		var $value = $(this).attr('value');

		$('.single-method p').slideUp();
		$('[data-method="' + $value + '"]').slideDown();

	});

});


