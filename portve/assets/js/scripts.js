/*---------------------------------------------
Template name:  Portve
Version:        1.0
Author:         TemplateBuilder


[Table of Content]

01: Scrollspy
02: Sticky Header
03: Smooth Scroll
04: Offcanvas Menu
05: Background Image
06: Skillbar Percentage
07: Portfolio Filter
08: Portfolio Popup
11: Back To Top Button



----------------------------------------------*/

    (function($) {
        "use strict";


        /* 01: Scrollspy
        ==============================================*/
        $('body').scrollspy({
            target: '#scrollSpy',
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

        $('.main-menu li a').bind('click',function(event){
            let $anchor = $(this);
            let headerH = '75';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280);
            event.preventDefault();
        });

        /* 04: Offcanvas Menu
        ==============================================*/
        let windows = $(window);
        let screenSize = windows.width();

        $(".menu-trigger").on('click', function () {
            $(".offcanvas-menu").addClass('show');
        });

        $(".offcanvas-close , .main-menu li a").on('click', function () {
            $(".offcanvas-menu").removeClass('show');
        });
        
        // Main Menu Apend To Offcanvas Menu
        if(screenSize<=991.98){
            $('.main-menu').appendTo('.offcanvas-menu .menu-inner');
        }
             

        /* 05: Background Image
        ==============================================*/

        let bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
        });
        

        /* 06: Skillbar Percentage
         ==============================================*/

        $(".single-skillbar").appear(function() {
            $(this).find(".skillbar-bg").each(function() {
                $(this).find(".skillbar").delay(600).animate({
                     width: $(this).attr("data-percentage")
                }, 1200);
            });
        });

        /* 07: Portfolio Filter
         ==============================================*/
         
        $(".portfolio-list").isotope();
        $('.portfolio-filter li').on('click', function () {
            $('.portfolio-filter li').removeClass("active");
            $(this).addClass("active");
            let selector = $(this).attr("data-filter");
            $('.portfolio-list').isotope({
                filter: selector,
                percentPosition: true,
                layoutMode: 'fitRows',
                transitionDuration: '0.8s'
            });
        });

        /* 08: Portfolio Popup
         ==============================================*/
        $('.portfolio-list').magnificPopup({
            delegate: 'a',
            type:'image',
            gallery:{
                enabled: true
            }
        });

        /* 09: Back To Top 
        ==============================================*/

        let $backToTopBtn = $('.backToTop');

        if ($backToTopBtn.length) {
            let scrollTrigger = 290, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
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
        
        
    })(jQuery);