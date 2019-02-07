/**
 * NAV component
 */

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
  },
};
