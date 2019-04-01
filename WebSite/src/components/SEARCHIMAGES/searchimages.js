/**
 * NAV component
 */

export default {
  data() {
    return {
      query: '',
      images: []
    }
  },
  methods: {
    retrieveImages() {
      const axios = require('axios');

      const pro = axios.get('https://images-api.nasa.gov/search?q=' + this.query);
      pro.then((response) => {
        return response;
      }).then((res) => {
        this.images = [];
        res.data.collection.items.forEach((item) => {
          this.images.push(item.links[0].href)
        });
      }).then(() => {
        console.log(this.images)
      }).catch((error) => {
        console.log(error)
      });
    },
    expandSearch() {
      console.log('test')
    }
  },
};
