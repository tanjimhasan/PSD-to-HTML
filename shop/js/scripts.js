/*---------------------------------------------
Template name:  crypdrone
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

xx: Main Header
xx: Changing Language
xx: Sliding Categroy Button
xx: Sliding Categroy Submenu
xx: Background Image
xx: Check Data
xx: Owl Carousel
xx: CountDown One
xx: CountDown Two
xx: Back To Top
xx: Product Slider Tab menu
xx: Changing Svg Color


----------------------------------------------*/

    (function($) {
        "use strict";

        /* xx: Main Header
        ==============================================*/

        $('.shop--main-menu a[href="#"]').on('click', function(event) {
                event.preventDefault();
            });

        $(".shop--main-menu nav").menumaker({
            title: '<i class="fa fa-bars"></i>',
            format: "multitoggle"
        });
        if($(window).scrollTop() > 260){
               $('.shop--header').addClass('sticky'); 
           };
        $(window).on('scroll', function(e){
            if($(this).scrollTop() < 260){
                $('.shop--header').removeClass('sticky')
            }else
                $('.shop--header').addClass('sticky')        
        });

        /* xx: Changing Language
        ==============================================*/

        $("#shop--change_language").on("click", function (event) {
            event.stopPropagation();
            $(".shop--language-list").slideToggle("250");
        });

        $("#shop--change_language").on("blur", function () {
            $(".shop--language-list").slideUp("250");
        });

        /* xx: Sliding Category Button
        ==============================================*/

        $(".shop--category-sliding-header .shop--hamburger-icon").on("click", function (event) {
            event.stopPropagation();
            $(".shop--category-sliding-menu").slideDown("250");
            $('.shop--category-sliding-header .shop--close-btn').addClass('show');
            $('.shop--category-sliding-area').addClass('active');
            $(this).toggleClass('remove');
        });

        $(".shop--category-sliding-header .shop--close-btn").on("click", function (event) {
            event.stopPropagation();
            $(".shop--category-sliding-menu").slideUp("250");
            $('.shop--category-sliding-header .shop--close-btn').toggleClass('show');
            $(".shop--category-sliding-header .shop--hamburger-icon").toggleClass('remove');
             $('.shop--category-sliding-area').removeClass('active');
        });

        // $( ".shop--category-sliding-wrapper" ).mouseover(function() {
        //     $('.shop--category-sliding-area').toggleClass('show');
        // });

        // $( ".shop--category-sliding-wrapper" ).mouseleave(function() {
        //     $('.shop--category-sliding-area').toggleClass('remove');
        // });

        /* xx: Sliding Category Submenu
        ==============================================*/
        var windows = $(window);

        function categorySubMenuToggle() {
            var screenSize = windows.width();
            if (screenSize <= 991) {
                $('.shop--menu-item-has-children > a span+span').prepend('<i class="expand menu-expand"></i>');
                $('.shop--category-sliding-menu .shop--menu-item-has-children ul').slideUp();
            } else {
                $('.shop--category-sliding-menu .shop--menu-item-has-children > a i').remove();
                $('.shop--category-sliding-menu .shop--menu-item-has-children ul').slideDown();
            }
        }

        categorySubMenuToggle();
        windows.resize(categorySubMenuToggle);

        $('.shop--category-sliding-menu').on('click', 'li a, li a span+span.menu-expand', function (e) {
            var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
            if ($a.parent().hasClass('shop--menu-item-has-children')) {
                if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
                    if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
                    else {
                        $(this).parents('li').siblings('li').find('ul:visible').slideUp();
                        $a.siblings('ul').slideDown();
                    }
                }
            }
            if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
                e.preventDefault();
                return false;
            }
        });

        /* xx: Background Image
        ==============================================*/

        var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
        });


        /*==================================
        XX: Check Data
        ====================================*/
        var checkData = function (data, value) {
            return typeof data === 'undefined' ? value : data;
        };

        /*==================================
        XX: Owl Carousel
        ====================================*/
        var $owlCarousel = $('.owl-carousel');
         
        $owlCarousel.each(function () {
            var $t = $(this);
                
            $t.owlCarousel({
                items: checkData( $t.data('owl-items'), 1 ),
                margin: checkData( $t.data('owl-margin'), 0 ),
                loop: checkData( $t.data('owl-loop'), true ),
                smartSpeed: 450,
                autoplay: checkData( $t.data('owl-autoplay'), true ),
                autoplayTimeout: checkData( $t.data('owl-speed'), 8000 ),
                center: checkData( $t.data('owl-center'), false ),
                animateOut: checkData( $t.data('owl-animate'), false ),
                nav: checkData( $t.data('owl-nav'), false ),
                navText: ["<i class='fa fa-angle-right'></i>" , "<i class='fa fa-angle-left'></i>"],
                dots: checkData( $t.data('owl-dots'), false ),
                responsive: checkData( $t.data('owl-responsive'), {} )
            });
        });
      
        // var owlAnimateFilter = function(even) {
        //     $(this)
        //     .addClass('__loading')
        //     .delay(70 * $(this).parent().index())
        //     .queue(function() {
        //         $(this).dequeue().removeClass('__loading')
        //     })
        // };

        /* xx: Top Category Slider
        ==============================================*/
        // $('.shop--product-slider-menu').on('click', '.filter-btn', function(e) {
        //     var filter_data = $(this).data('filter');

        //     /* return if current */
        //     if($(this).hasClass('active')) return;

        //      active current 
        //     $(this).addClass('active').siblings().removeClass('active');

        //     /* Filter */
        //     owl.owlFilter(filter_data, function(_owl) { 
        //         $(_owl).find('.item').each(owlAnimateFilter); 
        //     });
        // });

        /* xx: Count Down One
        ==============================================*/

        var $countDown = $('[data-countdown]');
        $countDown.each(function () {
            var $t = $(this);
            
            $t.countdown($t.data('countdown'), function(e) {
                $(this).html( '<ul class="list-unstyled">' + e.strftime('<li>%D<span>Days</span></li><li>%H<span>Hours</span></li><li>%M<span>Minutes</span></li><li>%S<span>Seconds</span></li>') + '</ul>' );
            });
        });

        /* xx: Count Down Two
        ==============================================*/

        var $countDown = $('[data-countdown2]');
        $countDown.each(function () {
            var $t = $(this);
            
            $t.countdown($t.data('countdown2'), function(e) {
                $(this).html( '<ul class="list-unstyled">' + e.strftime('<li>%D<span>Days</span></li><li>%H<span>Hours</span></li><li>%M<span>Minutes</span></li><li>%S<span>Seconds</span></li>') + '</ul>' );
            });
        });

        /* xx: Back To Top
        ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 350, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

        /* xx: Product Slider Tab Menu
        ==============================================*/

        $('.shop--product-slider-menu-list li').on('click', function (e) {
            e.preventDefault();
           
            var $href = $(this).attr('href');
            $('.shop--product-slider-menu-list li').removeClass('active');
            $(this).addClass('active');

            $('.shop--new-product-list .tab-pane').removeClass('active show');
            $('.shop--new-product-list ' + $href).addClass('active show');

        });

        /* xx: Changing svg color
        ==============================================*/

        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        });

        /* xx: Category Select
        ==============================================*/

        $('select').niceSelect();
        var searchToggle = $('.shop--search-toggle');
        var searchArea = $('.shop--search-block-wrapper');
        searchToggle.on('click', function () {
            event.stopPropagation();
            searchArea.slideToggle();
        });

    })(jQuery);