/**
 * NAV component
 */
import $ from 'jquery';

export default {
  mounted() {
    const navBar = document.querySelector('nav');
    const sticky = navBar.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    });
    let $el,
      leftPos,
      newWidth,
      $mainNav = $(".navbar-nav");

    $mainNav.append("<li id='magic-line'></li>");
    let $magicLine = $("#magic-line");

    $magicLine
      .width($(".active").width())
      .css("left", $(".active a").position().left)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());

    $(".navbar-nav li a").hover(
      function () {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth
        });
      },
      function () {
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth")
        });
      }
    );
  },
};