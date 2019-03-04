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
        moon: {
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

    let leftPosition = 0;
    let fullPath = this.$route.path.replace('/', '');
    leftPosition = this.magicLinePosition(fullPath);

    $magicLine
      .width($(".active").width())
      .css("left", leftPosition)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());

    const that = this;
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
          left: $magicLine.data('origLeft'),
          width: $magicLine.data("origWidth")
        });
      }
    );

    this.activeTab();
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
    },
    magicLinePosition(fullPath) {
      const links = document.querySelectorAll('.nav-item a');
      let magicLine = document.querySelector('#magic-line');

      magicLine.style.left = links[0].parentElement.offsetLeft + "px";

      links.forEach((item) => {
        if (fullPath === item.getAttribute('data-ref')) {
          magicLine.style.left = item.parentElement.offsetLeft + 'px';
        }
      })
    }
  }
};