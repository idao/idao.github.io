/*
* Navigation 导航
*
*/

$(function() {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header.article-header ').outerHeight();
  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header.article-header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header.article-header').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }




  /* 侧边栏 */

  var jPM = $.jPanelMenu({
      menu: '#sidebar',
      trigger: '#sidebar-trigger',
      duration: 300
  });

  jPM.on();
})
