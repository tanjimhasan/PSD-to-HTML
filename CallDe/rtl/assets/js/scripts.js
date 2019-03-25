/*---------------------------------------------
Template name:  CallDee
Version:        1
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]


01: Sticky header
02: Prevent To Empty Link Click
03: Mobile Menu
04: Homepage Slider 
05: Include Service Slider
06: Counter
07: Pricing Table Slider
08: Pricing Tab Menu
09: Customer Comment Slider
10: Client Logo Slider
11: Blog Slider
12: Product Quantity
13: Price Range
14: Product Tab Menu
15: Project Filter
16: Single Project Pop up
17: SVG
18: Client Logo Slider
19: Payment Method
20: Team Slider
21: Cart Quantity
22: Exclusive Service List
23: Header Search Box Expand
24: Activate Animation
25: Preloader
26: Scroll To Top

----------------------------------------------*/


(function($) {
    "use strict";

        /* 01: Sticky Header
        ==============================================*/

        var element = $('.header-top')
        var navOffset = jQuery(".header-top").offset().top + element.outerHeight(true) ;

        jQuery(window).scroll(function(){

            var scrollpos = jQuery(window).scrollTop();

            if (scrollpos >= navOffset) {
                jQuery(".main-header").addClass("is-sticky");
                $(".sticky-wrapper").css({ height: "80px" });
            }else{
                jQuery(".main-header").removeClass("is-sticky");
                $(".sticky-wrapper").css({ height: "auto" });
            }

        });

        /* 02: Prevent To Empty Link Click
        ==============================================*/

        $('.main-menu a[href="#"]').on("click", function(e){
            e.preventDefault()
        });

        /* 03: Mobile Menu
        ==============================================*/

        var mainMenuNav = $('.main-menu nav');
        mainMenuNav.meanmenu({
            meanScreenWidth: '991',
            meanMenuContainer: '.mobile-menu',
            meanMenuClose: '<span class="menu-close"></span>',
            meanMenuOpen: '<span class="menu-bar"></span>',
            meanRevealPosition: 'right',
            meanMenuCloseSize: '0',
        });

        /* 04: Homepage Slider
        ==============================================*/

        $(".main-slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: true
        });

        /* 05: Include Service Slider
        ==============================================*/
        
        $(".include-services-list").slick({
            prevArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            nextArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 2,
            rtl: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

        /* 06: Counter
        ==============================================*/

        $('.counter').counterUp({
            delay: 100,
            time: 1000
        });

        /* 07: Pricing Table Slider
         ==============================================*/
            
        $(".pricing-table-list").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

        /* 08: Pricing Tab Menu
        ==============================================*/

        $('.single-pricing-tab-menu a').on('click', function (e) {
            e.preventDefault();
           
            var $href = $(this).attr('href');
            $('.single-pricing-tab-menu a').removeClass('active');
            $(this).addClass('active');

            $('.Pricing-plan .tab-pane').removeClass('active show');
            $('.Pricing-plan ' + $href).addClass('active show');

        });

        /* 09: Customer Comment Slider
         ==============================================*/

        $(".customer-comments").slick({
            prevArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            nextArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: true
        });

        /* 10: Client Logo Slider
        ==============================================*/

        $(".client-logo-slider").slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 2,
            rtl: true,
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
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 379,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        /* 11: Blog Slider
         ==============================================*/
            
        $(".blog-container").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            rtl: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

        /* 12: Product Quantity
        ==============================================*/
    
        $('.pro-qty').append('<a href="#" class="inc pl-2 qty-btn"><i class="fa fa-plus"></i></a>');
        $('.pro-qty').append('<input type="text" value="1" class="">');
        $('.pro-qty').append('<a href="#" class= "dec pr-2 qty-btn"><i class="fa fa-minus"></i></a>');
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
        

        /* 13: Price Range
         ==============================================*/

        $('#price-range').slider({
            range: true,
            min: 0,
            max: 2000,
            values: [ 25, 970 ],
            slide: function( event, ui ) {
                $('#price-amount').val( '' + '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
            }
        });

        $('#price-amount').val( '' + '$' + $('#price-range').slider( 'values', 0 ) +
            ' - $' + $('#price-range').slider('values', 1 ) ); 

        /* 14: Product Tab Menu
         ==============================================*/

        $(".single-tab-menu").slick({
            prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            slidesToShow: 3,
            rtl: true,
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
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.single-tab-menu a').on('click', function (e) {
            e.preventDefault();

            var $href = $(this).attr('href');
            $('.single-tab-menu a').removeClass('active');
            $(this).addClass('active');

            $('.product-details-large .tab-pane').removeClass('active show');
            $('.product-details-large ' + $href).addClass('active show');

        });

        /* 15: Project Filter
         ==============================================*/

        $('.project-filter li').on('click', function () {
            $('.project-filter li').removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $('.project-list').isotope({
                filter: selector,
                layoutMode: 'fitRows'
            });
        });

        /* 16: Single Project Pop Up
        ==============================================*/

        $(".single-project-item").magnificPopup({
            delegate: 'a.popup-link', // child items selector, by clicking on it popup will open
            type: 'image',

        });

        /* 17: SVG Image
        ==============================================*/

        $(".svg").each(function() {
            var e = $(this),
                t = e.attr("id"),
                a = e.attr("class"),
                o = e.attr("src");
            jQuery.get(o, function(o) {
                var s = $(o).find("svg");
                void 0 !== t && (s = s.attr("id", t)), void 0 !== a && (s = s.attr("class", a + " replaced-svg")), !(s = s.removeAttr("xmlns:a")).attr("viewBox") && s.attr("height") && s.attr("width") && s.attr("viewBox", "0 0 " + s.attr("height") + " " + s.attr("width")), e.replaceWith(s)
            }, "xml");

        });
        

        /* 18: Client Logo Slider
        ==============================================*/

        $(".domain-slider").slick({
            prevArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            nextArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 8,
            slidesToScroll: 2,
            rtl: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* 19: Payment Method
        ==============================================*/

        $('[name="payment-action"]').on('click', function () {

            var $value = $(this).attr('value');
             $(this).addClass("active");
            $('.single-method .message-block').slideUp();
            $('[data-method="' + $value + '"]').slideDown();

        });

         /* 20: Team Slider
         ==============================================*/
            
        $(".team-member-list").slick({
            prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: true,
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

        /* 21: Cart Quantity
         ==============================================*/

        $('.cart-product-qty').append('<a href="#" class="inc qty-btn-cart ml-1"><i class="fa fa-plus"></i></a>');
        $('.cart-product-qty').prepend('<a href="#" class= "dec qty-btn-cart mr-1"><i class="fa fa-minus"></i></a>');
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


        /* 22: Exclusive Service List
        ==============================================*/
     
        $(".exclusive-service-list").slick({
            prevArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            nextArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

        /* 23: Header Search Box Expand
        ==============================================*/

        $(".header-form input").on("focus", function(){
            $(this).css({
                width: "150px"
            });
            $(".main-menu ul, .meanmenu-reveal").css(
                    "margin-left", "60px"
                );
        });

        $(".header-form input").on("blur", function(){
            $(this).css({
                width: "80px"
            });
            $(".main-menu ul, .meanmenu-reveal").css(
                "margin-left", "0px"
            );
        });

    /* 24: Activate Animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '0.1' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });
    });

    /* 25: Preloader
    ==============================================*/

    $(window).on('load', function(){

        setTimeout(function(){
            $('.preLoader').fadeOut('slow', function() {
              $(this).remove();
            });
           }, 1000);
    });

    /* 26: Scroll To Top
     ==============================================*/

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},900);
        return false;
    });
   

})(jQuery);