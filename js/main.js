var resizeTimer;

$(window).on('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleWindowResize, 500);
});

$(window).on('load', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleWindowResize, 500);
});

function handleWindowResize() {
  if (window.matchMedia("only screen and (min-width: 768px)").matches) {
    $('.menu-main').stickyNavbar({
      sectionSelector: "scrollspy",
      stickyModeClass: "is-sticky",
      unstickyModeClass: "unsticky",
      activeClass: "active",
      selector: "a",
      zindex: 99,
      mobile: true
    });
    $('.menu-sub').stickyNavbar({
      stickyModeClass: "is-sticky",
      zindex: 100,
      startAt: -50,
      animDuration: 350,
      easing: 'swing',
      animateCSS: false,
      animateCSSRepeat: false,
      cssAnimation: 'fadeInDown',
      jqueryEffects: false,
      jqueryAnim: 'slideDown',
      mobile: true
    });
  }
}

$(document).ready(function(){
  $('.slide-brand').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    pauseOnHover: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
    responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});