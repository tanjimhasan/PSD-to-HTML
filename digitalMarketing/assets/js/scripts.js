/*---------------------------------------------
Template name:  
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]


01: Sticky Header
02: Changing svg color
03: Background Image
04: Retina Js
05: Check Data
06: Owl Carousel
07: Activate Animation
08: Overlay Menu
09: Counter Up
10: Video Pop Up
11: Case Study Filter
12: Google Map
13: Faq Always Open 
14: Back To Top
15: Coming Soon Count Down



----------------------------------------------*/

    (function($) {
        "use strict";


        /* 01: Sticky Header
        ==============================================*/

        $(window).on('scroll', function(e){
            if($(this).scrollTop() < 100){
                $('.main-header').removeClass('sticky')
            }else
                $('.main-header').addClass('sticky')        
        });

        $(window).on('load', function(){
            if($(window).scrollTop() >= 100){
                $('.main-header').addClass('sticky')
            }
        });

        /* 02: Changing svg color
        ==============================================*/

        jQuery('img.svg').each(function(){
            let $img = jQuery(this);
            let imgID = $img.attr('id');
            let imgClass = $img.attr('class');
            let imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                let $svg = jQuery(data).find('svg');
        
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

        /* 03: Background Image
        ==============================================*/

        let bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
        });

        /*==================================
        04: Retina JS
        ====================================*/

        retinajs();
        
        /*==================================
        05: Check Data
        ====================================*/

        let checkData = function (data, value) {
            return typeof data === 'undefined' ? value : data;
        };


        /*==================================
        06: Owl Carousel
        ====================================*/

        let $owlCarousel = $('.owl-carousel');
         
        $owlCarousel.each(function () {
            let $t = $(this);
                
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
                navText: ['<img src="assets/images/icons/angle_left.svg" class="svg">', '<img src="assets/images/icons/angle_right.svg" class="svg">'],
                dots: checkData( $t.data('owl-dots'), false ),
                responsive: checkData( $t.data('owl-responsive'), {} )
            });
        });


        /* 07: Activate Animation
        ==============================================*/

        $(window).on('load', function(){

            let $animateEl = $('[data-animate]');

            $animateEl.each(function () {
                let $el = $(this),
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

        /*==================================
        08: Overlay Menu
        ====================================*/

        $(".menu-trigger").on("click", function (e){
            $(".damke_header").toggleClass("active");
            $(".damke_menu-wrapper").toggleClass("full-menu");
            $("body").toggleClass("damke_overlay-menu");
        });

        $('.damke_main-menu').find('ul li').parents('.damke_main-menu ul li').addClass('has-sub-menu');
        $('.damke_main-menu').find(".has-sub-menu").prepend('<span class="submenu-button"></span>');
        $('.damke_main-menu').find(".submenu-button").on("click", function(event){
            $(this).toggleClass("sub-menu-oppened")
            if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').slideUp('fast');
            } else {
                $(this).siblings('ul').addClass('open').slideDown('fast');
            }
             
        });

        /* 09: Counter Up
        ==============================================*/

        $('.count').counterUp({
                delay: 30,
                time: 2e3
        });

        /* 10: Video Pop Up
        ==============================================*/

        $('.damke_video-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            removalDelay: 300,
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }
        });

        /* 11: Case Study Filter
        ==============================================*/

        $('.damke_case-study-menu li').on('click', function () {
            $('.damke_case-study-menu li').removeClass("active");
            $(this).addClass("active");
            let selector = $(this).attr("data-filter");
            $('.damke_case-list').isotope({
                filter: selector,
            });
        });


        /* 12: Google Map
        ==============================================*/

        if($('#damke_google-map').length){
        let googleMapSelector = $('#damke_google-map'),
            myCenter = new google.maps.LatLng(40.6785635, -73.9664109);

        function initialize() {
            let mapProp = {
                center: myCenter,
                zoom: 11,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ebebeb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c7e5fd"
                                }
                            ]
                        }
                    ]
                };
                let map = new google.maps.Map(document.getElementById("damke_google-map"), mapProp);
                let marker = new google.maps.Marker({
                    position: myCenter,
                    icon: 'assets/images/icons/locator-icon.png'
                });
                marker.setMap(map);
            }
            if (googleMapSelector.length) {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
        }

        /* 13: Faq Always Open
        ==============================================*/

        $(".damke_single-faq .damke_fq-question").on("click", function(event) {
            $(this).parents(".damke_single-faq").children(".collapse").hasClass("show") &&
                (event.stopPropagation(), event.preventDefault())
        });

        /* 14: Back To Top 
        ==============================================*/

        let $backToTopBtn = $('.damke_backToTop');

        if ($backToTopBtn.length) {
            let scrollTrigger = 350, // px
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


        /* 15: Coming Soon Count Down
        ==============================================*/

        let $countDown = $('[data-countdown]');
        $countDown.each(function () {
            let $t = $(this);
            
            $t.countdown($t.data('countdown'), function(e) {
                $(this).html( '<ul class="nav justify-content-between">' + e.strftime('<li><span>%D</span><span>Days</span></li><li><span>%H</span><span>Hours</span></li><li><span>%M</span><span>Minutes</span></li><li><span>%S</span><span>Seconds</span></li>') + '</ul>' );
            });
        });
    
    })(jQuery);