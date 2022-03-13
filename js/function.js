/*global jQuery, document, window, smoothScroll, Circles, Odometer, NotificationFx, WOW, Photostack*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {

    'use strict';

    var onMobile, myVal, myCircle, OBTimerO, OBTimerC, portfoliostack;

    /* ==========================================================================
    Placeholder
    ========================================================================== */
    jQuery('input, textarea').placeholder();


    /* ==========================================================================
    Open / Close Menu
    ========================================================================== */
    jQuery('#open-button').on('click', function () {
        jQuery('body').toggleClass('over-menu');
        OBTimerO = setTimeout(function () {
            jQuery('body').toggleClass('show-menu');
        }, 50);
    });
    jQuery('#top-content-overlayer').on('click', function () {
        jQuery('body').removeClass('over-menu');
        OBTimerC = setTimeout(function () {
            jQuery('body').removeClass('show-menu');
        }, 50);
    });
    clearTimeout(OBTimerO);
    clearTimeout(OBTimerC);


    /* ==========================================================================
    Data Spy
    ========================================================================== */
    jQuery('body').attr('data-spy', 'scroll').attr('data-target', '#menu-wrapper').attr('data-offset', '75');


    /* ==========================================================================
    Scroll To Section
    ========================================================================== */
    jQuery('a.scrolltosection').on('click', function (event) {
        event.preventDefault();
    });


    /* ==========================================================================
    Scroll To Top
    ========================================================================== */
    jQuery('a.scrollto').on('click', function () {
        jQuery('html, body').animate({scrollTop: '0'}, 1700);
        return false;
    });


    /* ==========================================================================
    Personal Title
    ========================================================================== */
    jQuery('#personal-typed').typed({
        strings: ['самая успешная компания', 'предостовляем широкий выбор услуг','всегда рады помочь'],
        loop: true,
        typeSpeed: 30,
        backDelay: 2000,
        loopCount: false
    });


    /* ==========================================================================
    Personal Title 2
    ========================================================================== */
    jQuery('#personal-typed_2').typed({
        strings: ['веб-технологиям', 'музыке','компьютерной графике'],
        loop: true,
        typeSpeed: 30,
        backDelay: 2000,
        loopCount: false
    });


    /* ==========================================================================
    Skill Chart
    ========================================================================== */
    jQuery('.skills').waypoint(function () {
        jQuery('.skills').each(function () {
            var getid = jQuery(this).attr('id');
            myVal = jQuery(this).attr("data-rel");
            myCircle = Circles.create({
                width: 10,
                id: getid,
                radius: 85,
                value: myVal,
                duration: 2000,
                text: function (value) {return value; }
            });
        });
    }, { offset: '50%', triggerOnce: true });



    /* ==========================================================================
    Fancy Box
    ========================================================================== */
    jQuery('.fancybox').fancybox({
        helpers: {
            title: null,
            media: {},
            overlay: {
                speedOut: 0
            }
        }
    });


    /* ==========================================================================
    FitVid
    ========================================================================== */
    jQuery('.post-header').fitVids();


    /* ==========================================================================
    Numbers
    ========================================================================== */
    jQuery('.box-numbers [data-to]').each(function () {
        var $this = jQuery(this);
        $this.waypoint(function () {
            $this.countTo({speed: 100});
        }, {offset: '75%', triggerOnce: true });
    });


    /* ==========================================================================
    Skills Slider
    ========================================================================== */
    jQuery('.owl-skills').owlCarousel({
        items: 4,
        autoPlay: false,
        pagination: true,
        stopOnHover: true,
        navigation: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [479, 1]
    });


    /* ==========================================================================
    Portfolio Slider
    ========================================================================== */
    if (jQuery('body').hasClass('main-page')) {
        portfoliostack = new Photostack(document.getElementById('portfolio-photostack'));
    }


    /* ==========================================================================
    Testimonials Slider
    ========================================================================== */
    jQuery('.owl-testimonials').owlCarousel({
        autoPlay: false,
        singleItem: true,
        pagination: true,
        stopOnHover: true,
        navigation: false
    });


    /* ==========================================================================
    Project Slider
    ========================================================================== */
    jQuery('.owl-project').owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: false,
        stopOnHover: true,
        navigation: false
    });


    /* ==========================================================================
    Resume Slider
    ========================================================================== */
    jQuery('.owl-resume').owlCarousel({
        items: 3,
        autoPlay: false,
        pagination: true,
        stopOnHover: true,
        navigation: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [599, 1],
        itemsMobile: [479, 1]
    });


    /* ==========================================================================
    Post Slider
    ========================================================================== */
    jQuery('.owl-post').owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: false,
        stopOnHover: true,
        navigation: false
    });


    /* ==========================================================================
    on mobile
    ========================================================================== */
	onMobile = false;
    if (/Android/i.test(navigator.userAgent)) { onMobile = true; }

	if (onMobile === true) {

        /* ==========================================================================
        Remove Parallax
        ========================================================================== */
        jQuery('.parallax-image #home-section').css({backgroundAttachment: 'scroll'});
        jQuery('#alternative-home-section').css({backgroundAttachment: 'scroll'});
        jQuery('#skills-section').css({backgroundAttachment: 'scroll'});
        jQuery('#subscribe-section').css({backgroundAttachment: 'scroll'});
        jQuery('#testimonials-section').css({backgroundAttachment: 'scroll'});
        jQuery('#numbers-section').css({backgroundAttachment: 'scroll'});

        /* ==========================================================================
        Smooth Scroll
        ========================================================================== */
        smoothScroll.init({
            offset: 70,
            speed: 500,
            updateURL: false
        });


    } else {

        /* ==========================================================================
        Parallax
        ========================================================================== */
        jQuery('.parallax-image #home-section').parallax('50%', 0.3);
        jQuery('#alternative-home-section').parallax('50%', 0.5);

        /* ==========================================================================
        Smooth Scroll
        ========================================================================== */
        smoothScroll.init({
            offset: 70,
            speed: 800,
            updateURL: false
        });
    }

}); // JavaScript Document




/* ==========================================================================
Window Resize
========================================================================== */
jQuery(window).resize(function () {

    'use strict';

    var containerMargin;

    /* ==============================================
    Refresh Data Spy
    =============================================== */
    jQuery('[data-spy="scroll"]').each(function () {
        var $spy = jQuery(this).scrollspy('refresh');
    });


    /* ==============================================
    Home Section Height
    =============================================== */
    containerMargin = ((jQuery(window).height() - jQuery('#home-section-container').height()) / 2) + 50;
    jQuery('#home-section').css({height: jQuery(window).height()});
    jQuery('#home-section-container').css({marginTop: containerMargin});


});




/* ==========================================================================
Window Scroll
========================================================================== */
jQuery(window).scroll(function () {

    'use strict';

    var enable_opacity, home_height, current_position;

    current_position = jQuery(document).scrollTop();

    /* ==============================================
    Home Section Opacity
    =============================================== */
    enable_opacity = true; /* Change it to false to disable the Home opacity */
    if (enable_opacity === true) {
        home_height = jQuery('#home-section').height();
        jQuery('#home-section').css({opacity: (1 - current_position / home_height * 1.2)});
        jQuery('.image-slider #supersized').css({opacity: (1 - current_position / home_height * 1.2)});
    }


    /* ==============================================
    Menu Background Color
    =============================================== */
    if (current_position >= 10) {
        jQuery('#menu-wrapper').addClass('menubgC');
    } else {
        jQuery('#menu-wrapper').removeClass('menubgC');
    }


});




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {

    'use strict';

    var LoaderDelay, containerMargin, notification_on, notification, portfoliogrid, withanimation, wow;

    /* ==============================================
    Loader
    =============================================== */
    LoaderDelay = 350;

    function hideLoader() {
        var loadingLoader = jQuery('#loader');
        loadingLoader.css({height: 0});
        jQuery('#loader-container').css({display: 'none'});
    }
    hideLoader();


    /* ==============================================
    Home Section Height
    =============================================== */
    containerMargin = ((jQuery(window).height() - jQuery('#home-section-container').height()) / 2) + 50;
    jQuery('#home-section').css({height: jQuery(window).height()});
    jQuery('#home-section-container').css({marginTop: containerMargin});


    /* ==============================================
    Notification Message
    =============================================== */
    notification_on = true; /* Change it to false if you want to disable the Notification Message */
    if (notification_on === true) {
        if (!jQuery('body').hasClass('single-project')) {
            setTimeout(function () {
                notification = new NotificationFx({
                    ttl: 7000,
                    type: 'notice',
                    layout: 'growl',
                    effect: 'slide',
                    message: '<p>Внимание все внешние кнопки отключены</p>'
                });
                notification.show();
            }, 1000);
        }
    }


    /* ==========================================================================
    Projects
    ========================================================================== */
    if (jQuery('body').hasClass('projects')) {
        portfoliogrid = jQuery('.portfolio-grid');
        portfoliogrid.isotope({
            filter: '*',
            itemSelector: 'li',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
    }
    jQuery('.portfoliofilter a').on('click', function (e) {
        jQuery('.portfoliofilter a').removeClass('selected');
        jQuery(this).addClass('selected');
        var selector = jQuery(this).attr('data-filter');
        portfoliogrid.isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });


    /* ==========================================================================
    Dribbble Feed
    ========================================================================== */
    jQuery.jribbble.getShotsByPlayerId('NestoLab', function (playerShots) {
        var html = [];
        jQuery.each(playerShots.shots, function (i, shot) {
            html.push('<li><a href="' + shot.url + '" title="' + shot.title + '" target="_blank"><img src="' + shot.image_url + '" alt="' + shot.title + '"></a></li>');
        });
        jQuery('.widget-dribbble ul').html(html.join(''));
    }, {page: 1, per_page: 1});


    /* ==========================================================================
    Flickr Feed
    ========================================================================== */
    jQuery('#flickr-feed').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '25461271@N07'
        },
        itemTemplate: '<li>' + '<a href="{{image_b}}" class="fancybox" data-fancybox-group="gall1" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>'
    });


    /* ==========================================================================
    WOW Animation
    ========================================================================== */
    withanimation = true; /* Change it to false to disable the animation */
    if (withanimation === true) {
        wow = new WOW({
            offset: 40,
            mobile: false
        });
        wow.init();
    }
});