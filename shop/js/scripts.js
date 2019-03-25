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
xx: Price Range
xx: Product Details Tab Menu
xx: Product Quantity
xx: Modal Quick View
xx: Add to Cart & Wish List Modal


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
        // if($(window).scrollTop() > 220){
        //        $('.shop--header').addClass('sticky'); 
        //    };
        // $(window).on('scroll', function(e){
        //     if($(this).scrollTop() < 220){
        //         $('.shop--header').removeClass('sticky')
        //     }else
        //         $('.shop--header').addClass('sticky')        
        // });

        /* xx: Changing Language
        ==============================================*/

        $("#shop--change_language").on("click", function (event) {
            event.stopPropagation();
            $(".shop--language-list").slideToggle("250");
            return false;
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

        /* xx: Sliding Category Submenu
        ==============================================*/
        var windows = $(window);
        var screenSize = windows.width();
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
        function categorySubMenuSliding() {
            if (screenSize <= 991) {
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
            }
        }
        categorySubMenuSliding();
        windows.resize(categorySubMenuSliding);
        

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

        $('.shop--product-slider-menu-list li a').on('click', function (e) {
            e.preventDefault();
           
            var $href = $(this).attr('href');
            $('.shop--product-slider-menu-list li a').removeClass('active');
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

        /* xx: Changing View Mode
        ==============================================*/
        $('.shop-product-view-mode li a').on('click', function (e) {
        e.preventDefault();

        var shopProductBox = $('.shop--boxed-product-item');
        var shopViewMode = $(this).data('target');

        $('.shop-product-view-mode li a').removeClass('active');
        $(this).addClass('active');
        if (shopViewMode == "grid-col-2") {
            shopProductBox.removeClass('shop--col-self');
            shopProductBox.removeClass('shop--list');
            shopProductBox.removeClass('shop--column-five');
            shopProductBox.addClass('shop--col-two');
            shopProductBox.addClass('shop--grid');
        }
        else if(shopViewMode == "shop--grid-self"){
            shopProductBox.removeClass('shop--col-two');
            shopProductBox.removeClass('shop--list');
            shopProductBox.addClass('shop--col-self');
            shopProductBox.addClass('shop--grid');
        }
        else if(shopViewMode == "shop--grid-col-5"){
            shopProductBox.removeClass('shop--col-two');
            shopProductBox.removeClass('shop--list');
            shopProductBox.addClass('shop--grid');
            shopProductBox.addClass('shop--column-five');
        }
        else if(shopViewMode == "list"){
            shopProductBox.removeClass('shop--col-two');
            shopProductBox.removeClass('shop--grid');
            shopProductBox.addClass('shop--list');
            shopProductBox.removeClass('shop--col-self');
            shopProductBox.removeClass('shop--column-five');
        }
    });

    /* xx: Price Range
    ==============================================*/
    $('#shop--price-range').slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 0, 970 ],
        slide: function( event, ui ) {
            $('#shop--price-amount').val( '' + '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
        }
    });

    $('#shop--price-amount').val( '' + '$' + $('#shop--price-range').slider( 'values', 0 ) +
        ' - $' + $('#shop--price-range').slider('values', 1 ) );

    /* xx: Product Details Tab Menu
    ==============================================*/

    $('.shop--product-single-details-tab-menu a').on('click', function (e) {
        e.preventDefault();
       
        var $href = $(this).attr('href');
        $('.shop--product-single-details-tab-menu a').removeClass('active');
        $(this).addClass('active');

        $('.shop--product-details-large-img .tab-pane').removeClass('active show');
        $('.shop--product-details-large-img ' + $href).addClass('active show');

    });

    /* xx: Product Quantity
    ==============================================*/

    $('.shop--pro-qty').prepend('<a href="#" class= "dec shop--qty-btn-cart mr-1"><i class="fa fa-minus"></i></a>');
    $('.shop--pro-qty').append('<input type="text" value="1" class="">');
    $('.shop--pro-qty').append('<a href="#" class="inc shop--qty-btn-cart ml-1"><i class="fa fa-plus"></i></a>');
    $('.shop--qty-btn-cart').on('click', function (e) {
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

    /* xx: Modal Quick View
    ==============================================*/
    $('.shop--quickView').on('click', function(event){
        event.preventDefault();
        $('.shop--modal-quickView-container').addClass('show');
        $('.shop-modal-overlay').css('opacity',1);
        $('body').delay(500).addClass('modal-window-open');
    })

    $('.shop--modal-close-btn').on('click', function(){
        $('.shop--modal-quickView-container').removeClass('show');
        $('body').delay(500).removeClass('modal-window-open');
    })

    $('.shop-modal-overlay').on('click', function(){
        $(this).delay(500).parents('.shop--modal-quickView-container').removeClass('show');
        $('body').delay(500).removeClass('modal-window-open');
    })

    /* xx: Add to Cart & Wish List Modal
    ==============================================*/
    $( '.shop--add-whishList, .shop--addtoCart' ).on('click', function(e){
        e.preventDefault();
    });

    $(' .shop--addtoCart').on('click', function(e){
        $('.shop--modal-add-to-Cart').fadeTo(300, 1);
         e.preventDefault();
         $('.shop--modal-add-to-Cart').css({'opacity': "1", "visibility":"visible"}).delay(1500).fadeTo(250, 0);
     });

    $('.shop--add-whishList').on('click', function(e){
        $('.shop--modal-added-wishlist').fadeTo(300, 1);
         e.preventDefault();
         $('.shop--modal-added-wishlist').css({'opacity': "1", "visibility":"visible"}).delay(1500).fadeTo(250, 0);
     });

})(jQuery);