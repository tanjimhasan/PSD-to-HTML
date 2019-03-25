/*---------------------------------------------
Template name:  HiChat
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Scrollspy
02: Sticky Header
03: Smooth Scroll
04: Counter Up
05: Changing svg color
06: Background Image
07: App Screenshot Slider
08: Feedback Slider
09: Faq
10: Offcanvas Menu
11: Back To Top Button
12: Hero Area Slider
13: Retina Js
14: Subscription Pop Up
15: Blog Masonry
16: Blog Comment Sliding



----------------------------------------------*/

    (function($) {
        "use strict";


        /* 01: Scrollspy
        ==============================================*/
        $('body').scrollspy({
            target: '#hiChatScrollspy',
            offset: 100
        });

        /* 02: Sticky Header
        ==============================================*/

        $(window).on('scroll', function(e){
            if($(this).scrollTop() < 100){
                $('.main-header').removeClass('sticky')
            }else
                $('.main-header').addClass('sticky')        
        });

        /* 03: Smooth Scroll
        ==============================================*/

        $('.hiChat--main-menu li a').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '85';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280);
            event.preventDefault();
        });

        /* 04: Counter Up
        ==============================================*/
        $('.count').counterUp({
                delay: 30,
                time: 2e3
        });

        /* 05: Changing svg color
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

        /* 06: Background Image
        ==============================================*/

        var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
        });
	
        /* 07: App Screenshot Slider
        ==============================================*/

        var swiper = new Swiper('.hiChat--app-screenshot-slider', {
            effect: 'coverflow',
            loop: true,
            autoplay: {
                delay: 3000,
            },
            mousewheelControl: true,
            centeredSlides: true,
            lazyLoading: true,
            slidesPerView: 4,
            initialSlide: 4,
            coverflowEffect: {
                rotate:  0, 
                stretch: 0,
                depth: 90,
                modifier: 1,
                slideShadows : 0,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
            }
        });

        /* 08: Feedback Slider
        ==============================================*/

         var swiper = new Swiper('.hiChat--feedback-slider', {
            slideToClickedSlide: true,
            direction: 'vertical',
            centeredSlides: true,
            slidesPerView: 3,
            mousewheelControl: true,
            loop: true,
            // autoplay: {
            //     delay: 3000,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            breakpoints: {
                991: {
                    autoHeight: true,
                    grabCursor: true,
                    slidesPerView: 1
                },
                767: {
                    autoHeight: true,
                    grabCursor: true,
                    slidesPerView: 1,
                },
                575: {
                    autoHeight: true,
                    grabCursor: true,
                    slidesPerView: 1
                }
            }
        });

        /* 09: Faq
        ==============================================*/

        $(".hiChat--faq-wrapper").on("click",".question", function () {

            $(this).next().slideDown();

            $(".accordion-text").not($(this).next()).slideUp();

        });

        $(".hiChat--faq-wrapper").on("click",".question", function () {

            $(this).parent().addClass("active").siblings().removeClass("active");

        });

        /* 10: Offcanvas Menu
        ==============================================*/
        var windows = $(window);
        var screenSize = windows.width();

        $(".hiChat--menu-trigger").on('click', function () {
            $(".hiChat--offcanvas-menu").addClass('show');
            $(".hiChat--shade").addClass('active');
            $(".main-header").addClass('offcanvasActive');
            $(".main-header").removeClass('sticky');
        });

        $(".hiChat--offcanvas-cancel , .hiChat--main-menu li a , .hiChat--shade").on('click', function () {
            $(".hiChat--offcanvas-menu").removeClass('show');
            $(".hiChat--shade").removeClass('active');
            $(".main-header").removeClass('offcanvasActive');
             $(".main-header").addClass('sticky');
        });
        
        // Main Menu Apend To Offcanvas Menu
        if(screenSize<=991.98){
            $('.hiChat--main-menu').appendTo('.hiChat--offcanvas-menu .offcanvas-menu-inner');
        }

        
        $('.hiChat--offcanvas-menu .hiChat--main-menu').find('ul li').parents('.hiChat--main-menu ul li').addClass('has-sub-menu');
        $('.hiChat--offcanvas-menu .hiChat--main-menu').find(".has-sub-menu").prepend('<span class="submenu-button"></span>');
        $('.hiChat--offcanvas-menu .hiChat--main-menu').find(".submenu-button").on("click", function(event){
            $(this).toggleClass("sub-menu-oppened")
            if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').slideUp('200');
            } else {
                $(this).siblings('ul').addClass('open').slideDown('200');
            }
             
        })
        /* 11: Back To Top Button
        ==============================================*/
        var $backToTopBtn = $('.hiChat--backToTop');

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

        /* 12: Hero Area Slider
        ==============================================*/

        var $heroSwiper = new Swiper(".hiChat--hero-slider-area", {
            loop: false,
            spaceBetween: 1,
            speed: 500,
            autoplay: {
                delay: 5e3
            },
            pagination: {
                el: ".hiChat--hero-pagination",
                clickable: !0,
            },
        })

        // Update Active Index On Slide Scroll
        $heroSwiper.on('slideChange', function () {
            var $index = $heroSwiper.activeIndex+1;
            if ($index<10) {
                $(".hiChat--slider-counting .current-slide").text("0"+$index);
            }else{
                $(".hiChat--slider-counting .current-slide").text($index);
            }
        });

        // Check Slider Class
        if ($(".hiChat--hero-area .swiper-container").hasClass("hiChat--hero-slider-area")) {
            var $totalSlides = $heroSwiper.slides.length;

            if ($totalSlides<10) {
                  $(".hiChat--slider-counting .total-slide").text("0"+$totalSlides);
                }else{
                    $(".hiChat--slider-counting .total-slide").text($totalSlides);
                }
        }

        /*==================================
        13: Retina JS
        ====================================*/
        retinajs();

        /*==================================
        14: Subscription Pop Up
        ====================================*/

        $('#subscription-popup').on('click', function(event){
            event.preventDefault();
            $('.hiChat--freeTrial-container').addClass('show');
            $('.hiChat--modal-overlay').css({'opacity': ".5", "visibility":"visible"});
            $(".main-header").removeClass('sticky');
        });

        $('.hiChat--modal-overlay, .freeTrial-close-btn').on('click', function(event){
            $('.hiChat--freeTrial-container').removeClass('show');
            $('.hiChat--modal-overlay').css({'opacity': "0", "visibility":"hidden"});
            $(".main-header").addClass('sticky');
        });

        /*==================================
        15: Blog Masonry
        ====================================*/
        
        $('.hiChat--blog-masonry').isotope();

        $('.hiChat--blog-metro').isotope({
          itemSelector: '.hiChat--single-blog-item',
          percentPosition: true,
        });

        /*==================================
        16: Blog Comment Sliding
        ====================================*/

        $('.comment-title').on('click', function(event){
            $(this).toggleClass('show');
            $('.post-comments-inner').slideToggle();
        });
    
    })(jQuery);