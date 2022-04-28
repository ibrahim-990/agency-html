/* global jQuery, $ */
var main = function () {

    var stopPropagation = function () { // Stop Propagation
        $(".links,.wrap,.content-links .links,.overlay-loader,.modal-container .modal-custom").on("click", function (e) {
            e.stopPropagation();
        });
    };
    var onClickBody = function () { // Remove Classes on click body
        $("body").on("click", function () {
            $(".content-links").removeClass("active-menu-responsive");
            if ($(".content-links").hasClass("active-menu-responsive")) {
                $(".header .overlay").addClass("is-active");
            } else {
                $(".header .overlay").removeClass("is-active");
            }
            $(".wrap .hamburger").removeClass("is-active");
            $("body").removeClass("no-scroll");
        });
    };
    var openMenuResponsive = function () { //Open Navbar responsive
        $(".wrap .hamburger").on("click", function () {
            let $selector = $(".content-links");
            $selector.toggleClass("active-menu-responsive");
            if ($selector.hasClass("active-menu-responsive")) {
                $(".header .overlay").addClass("is-active");
            } else {
                $(".header .overlay").removeClass("is-active");
            }

            $(this).toggleClass("is-active");
            $("body").toggleClass("no-scroll");
        });
    };

    var swiper_our_partners = function(){
        new Swiper('#swiper-our-partners', {
            speed: 2000,
            spaceBetween: 100,
            slidesPerView:'auto',
            loop:true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                320:{
                    spaceBetween: 40,
                    slidesPerView:'auto',
                },
                640:{
                    spaceBetween: 60,
                    slidesPerView:'auto',
                },
                768:{
                    spaceBetween: 100,
                    slidesPerView:'auto',
                }
            },
        });
    }

    var loading = function () {
        $("body").addClass("no-scroll");
        $('.loader-page').addClass('loaded');
    };

    return {
        init: function () {
            loading();
            swiper_our_partners();
            stopPropagation();
            onClickBody();
            openMenuResponsive();
        }
    };
}();

$(document).ready(function () {
    main.init();
    $("body").removeClass("no-scroll");
    $('.loader-page').css({'display': 'none'});
});
