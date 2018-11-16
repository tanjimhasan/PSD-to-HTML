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
02: Homepage Slider 
04: Team member slider
05: Counter
06: Pricing Table Slider
07: Customer Comment Slider
08: Client Logo Slider
09: Blog Slider
10: Back to top button
11: Scroll To Top
12: Price Range
13: Product Tab Menu
14: Project Filter

----------------------------------------------*/


(function($) {
    "use strict";
    $(function(){
    
        /* 01: Sticky Header
        ==============================================*/

        var element = $('.header-top')
        var navOffset = jQuery(".header-top").offset().top + element.outerHeight(true) ;

        jQuery(window).scroll(function(){

            var scrollpos = jQuery(window).scrollTop();

            if (scrollpos >= navOffset) {
                jQuery(".main-header").addClass("is-sticky");
                $(".sticky-wrapper").css({ height: "60px" });
            }else{
                jQuery(".main-header").removeClass("is-sticky");
                $(".sticky-wrapper").css({ height: "auto" });
            }

        });

        /* 02: Mobile Menu
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

        /* 03: Homepage Slider
        ==============================================*/

        $(".main-slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        /* 04: Team member slider
        ==============================================*/
        
        $(".include-services-list").slick({
            prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
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

        /* 05: Counter
        ==============================================*/

        $('.counter').counterUp({
            delay: 100,
            time: 1000
        });

        /* 06: Pricing Table Slider
         ==============================================*/
            
        $(".pricing-table-list").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
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

        /* 07: Customer Comment Slider
         ==============================================*/

        $(".customer-comments").slick({
            prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        /* 08: Client Logo Slider
        ==============================================*/

        $(".client-logo-slider").slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
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
                        slidesToShow: 3,
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
        
        /* 09: Blog Slider
         ==============================================*/
            
        $(".blog-container").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
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

        /* 10: Product Quantity
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
        
        /* 11: Scroll To Top
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

        /* 12: Price Range
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

        /* 13: Product Tab Menu
         ==============================================*/

        $(".single-tab-menu").slick({
            prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
            nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
            slidesToShow: 3,
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

        /* 14: Project Filter
         ==============================================*/

        $('.project-filter li').on('click', function () {
            $('.project-filter li').removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $('.project-list').isotope({
                filter: selector
            });
        });
        /* 12: Preloader
        ==============================================*/
        $(".single-project-item").magnificPopup({
            delegate: 'a.popup-link', // child items selector, by clicking on it popup will open
            type: 'image',

        });

    /* 12: Preloader
    ==============================================*/

    // $(window).on('load', function(){

    //     function removePreloader() {
    //         var preLoader = $('.preLoader');
    //         preLoader.fadeOut();
    //     }
    //     setTimeout(removePreloader, 250);
    // });


    
    });

})(jQuery);