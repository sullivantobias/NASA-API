/**
 * NAV component
 */

import LunarPhase from '../LUNARPHASE/LUNARPHASE.vue'

export default {
  components: {LunarPhase},
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
      },
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

    let mainNav = document.querySelector(".navbar-nav");
    const magicLineElement = document.createElement('li');
    magicLineElement.id = "magic-line";

    mainNav.appendChild(magicLineElement);
    let magicLine = document.querySelector("#magic-line");

    let fullPath = this.$route.path.replace('/', '');
    let leftPosition = this.magicLinePosition(fullPath).left;
    let width = this.magicLinePosition(fullPath).width;

    magicLine.style.width = width + 'px';
    magicLine.style.left = leftPosition + 'px';
    let origLeft = magicLine.offsetLeft + 'px';
    let origWidth = magicLine.offsetWidth + 'px';

    const liA = document.querySelectorAll(".navbar-nav li a");

    liA.forEach(
      (item) => {
        item.addEventListener('mouseover', () => {
          let leftPos = item.offsetLeft;
          let widthItem = item.offsetWidth;
          magicLine.style.left = leftPos + 'px';
          magicLine.style.width = widthItem + 'px';
        });

        item.addEventListener('mouseout', () => {
          magicLine.style.left = origLeft;
          magicLine.style.width = origWidth
        })
      }
    );
    window.addEventListener('resize', () => {
      leftPosition = this.magicLinePosition(fullPath).left;
      width = this.magicLinePosition(fullPath).width;

      magicLine.style.left = leftPosition + 'px';
      magicLine.style.width = width + 'px';
    });

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
      let positionLine = {
        left: links[0].parentElement.offsetLeft - 7,
        width: links[0].parentElement.offsetWidth
      };

      links.forEach((item) => {
        if (fullPath === item.getAttribute('data-ref')) {
          positionLine.left = item.parentElement.offsetLeft - 7;
          positionLine.width = item.parentElement.offsetWidth;
        }
      });
      return positionLine;
    },
  }
};