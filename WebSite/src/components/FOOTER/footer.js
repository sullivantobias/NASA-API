/**
 * FOOTER component
 */

export default {
  data() {
    return {
      links: {
        Contact: {
          classLink: 'link col-4 contact',
          title: "Contact Me",
          href: 'mailto:sullytobias@gmail.com'
        },
        Nasa: {
          classLink: 'link col-4 website',
          title: "Nasa Website",
          href: 'https://www.nasa.gov/'
        },
        Api: {
          classLink: 'link col-4 api',
          title: "Nasa API",
          href:"https://api.nasa.gov/"
        }
      }
    }
  },
  methods: {
    redirect(link) {
      window.location.href = link;
    }
  }
};
