// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
    Testimonial Slider
    =============================================== */ 

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/

    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('on');
            $('.logo').css('width', '12%');
            $('.logo').html('<a href="#banner"><img src="img/logo_active.svg"></a>');
            $('.menu_icon').html('<img src="img/menu_active.svg">');
        } else {
            $('header').removeClass('on');
            $('.logo').css('width', '15%');
            $('.logo').html('<a href="#banner"><img src="img/logo.svg"></a>');
            $('.menu_icon').html('<img src="img/menu.svg">');
        }
    });

    $('body').scrollspy({ 
        target: 'header',
        offset: 80
    })


}());


}
main();