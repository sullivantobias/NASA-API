/**
 * APOD component
 */

export default {
  data() {
    return {
      title: '',
      urlImage: '',
      urlVideo: '',
      description: '',
      copyright: '',
      date: '',
    };
  },
  mounted() {
    this.doRequest();
  },
  methods: {
    doRequest() {
      const axios = require('axios');

      axios.get('https://api.nasa.gov/planetary/apod?api_key=mGlyqdllt3l9im7mObCfTnJiI4wsyJJLnTFdT6Gi')
        .then((response) => {
          this.title = response.data.title;

          if (!response.data.url.includes('youtube'))
            this.urlImage = response.data.url;
          else this.urlVideo = response.data.url;

          this.description = response.data.explanation;
          if (response.data.copyright) this.copyright = `\u00A9 ${response.data.copyright}`;
          this.date = response.data.date;
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }
};
