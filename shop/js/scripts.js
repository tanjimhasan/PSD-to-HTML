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

xx: Category Sliding Menu


----------------------------------------------*/

    (function($) {
        "use strict";

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

        $(".shop--category-sliding-btn").on("click", function (event) {
            event.stopPropagation();
            $(".shop--category-sliding-menu").slideDown("250");
        });

        $(".shop--close-btn").on("click", function (event) {
            event.stopPropagation();
            $(".shop--category-sliding-menu").slideUp("250");
        });

        /* xx: Sliding Category Button
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

        /*-- Category Sub Menu --*/
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
                    stagePadding: checkData( $t.data('owl-stagePadding'), 0 ),
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
      
        var owlAnimateFilter = function(even) {
            $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
        };

        /* xx: Top Category Slider
        ==============================================*/
        $('.shop--product-slider-menu').on('click', '.filter-btn', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('active')) return;

            /* active current */
            $(this).addClass('active').siblings().removeClass('active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) { 
                $(_owl).find('.item').each(owlAnimateFilter); 
            });
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
    })(jQuery);