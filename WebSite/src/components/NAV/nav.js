/**
 * NAV component
 */
import $ from 'jquery';

export default {
  data() {
    return {
      navLinks: {
        home: {
          title: 'Home',
          ref: '/',
          active: '',
        },
        asteroid: {
          title: 'Moon',
          ref: 'moon',
          active: '',
        }
      }
    }
  },
  mounted() {

    const navBar = document.querySelector('nav');
    const sticky = navBar.offsetTop;

    this.activeTab();

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
  methods: {
    activeTab() {
      let fullPath = '/';
      Object.keys(this.navLinks).forEach((key) => {
        if (this.$route.path !== '/') {
          fullPath = this.$route.path.replace('/', '');
        }
        if (this.navLinks[key].ref === fullPath) this.navLinks[key].active = 'currentActiveTab';
      });
    }
  }
};