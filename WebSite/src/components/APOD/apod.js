/**
 * APOD component
 */

export default {
  data() {
    return {
      title: '',
      urlImage: '',
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
            console.log(response);
            this.title = response.data.title
            this.urlImage = response.data.url;
            this.description = response.data.explanation;
            this.copyright = `\u00A9 ${response.data.copyright}`;
            this.date = response.data.date;
          })
          .catch((error) => {
            console.error(error);
          })
    }
  }
};
