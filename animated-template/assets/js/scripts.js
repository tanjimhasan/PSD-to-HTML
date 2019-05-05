/*---------------------------------------------


[Table of Content]

01: Background Image
02: Check Data
03: Owl Carousel
04: Back To Top Button
05: Offcanvas Menu




----------------------------------------------*/

    (function($) {
        "use strict";

        let deadLine = new Date("may 10, 2019 12:37:25").getTime(); 

        let countDown = setInterval(function(){
            let now = new Date().getTime();
            let remainTime = deadLine - now;
            let days = (remainTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor(days * 24);
            let mins = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((remainTime % (1000 * 60)) / 1000);

            document.getElementById("hours").innerHTML =hours ; 
            document.getElementById("minutes").innerHTML =mins ; 
            document.getElementById("seconds").innerHTML =secs ; 
        },1000)

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
                dots: checkData( $t.data('owl-dots'), false ),
                responsive: checkData( $t.data('owl-responsive'), {} )
            });
        });

    })(jQuery);