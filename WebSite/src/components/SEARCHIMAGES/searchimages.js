/**
 * NAV component
 */
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import 'lightbox2/src/css/lightbox.css'
import LightBox from 'lightbox2/src/js/lightbox.js'


export default {
  components: {PulseLoader},
  data() {
    return {
      query: '',
      images: [],
      dataVisible: true,
      sortBy: {
        title: 'Sort by older',
        value: 'older',
        visible: false
      },
      errorMessage: {
        visible: false,
        message: 'No images found, please retry'
      },
      results: {
        number: 0
      },
      loadingPhase: false,
    }
  },
  mounted() {
    LightBox.option({
      'resizeDuration': 200,
      'positionFromTop': 100,
      'wrapAround': true
    });
  },
  methods: {
    retrieveImages() {
      const axios = require('axios');
      const pro = axios.get('https://images-api.nasa.gov/search?q=' + this.query);
      this.loadingPhase = true;
      if (this.loadingPhase) {
        this.dataVisible = false
      }
      pro.then((response) => {
        console.log(response)
        this.loadingPhase = false;
        this.dataVisible = true;
        return response;
      }).then((res) => {
        this.images = [];
        this.errorMessage.visible = false;
        if (res.data.collection.items.length > 0) {
          this.results.number = res.data.collection.items.length;
          if (!this.sortBy.visible) {
            this.sortBy.visible = true;
          }
          this.sortBy.title = 'Sort by older';
          this.sortBy.value = 'older';

          res.data.collection.items.forEach((item) => {
            const images = {
              title: item.data[0].title,
              img: item.links[0].href,
              date_created: new Date(item.data[0].date_created).toDateString(),
              caption: item.data[0].description
            };
            this.images.push(images);
            this.images.sort((a, b) => (new Date(b.date_created) - new Date(a.date_created)));
          });
        } else {
          this.errorMessage.visible = true;
          this.sortBy.visible = false;
        }
      }).catch((error) => {
        this.errorMessage.visible = true;
        console.log(error)
      });
    },
    sortImages() {
      if (this.sortBy.value === 'older') {
        this.images.sort((b, a) => (new Date(b.date_created) - new Date(a.date_created)));
        this.sortBy.title = 'Sort by newer';
        this.sortBy.value = 'newer';
      } else {
        this.images.sort((a, b) => (new Date(b.date_created) - new Date(a.date_created)));
        this.sortBy.title = 'Sort by older';
        this.sortBy.value = 'older';
      }
    }
  },
}
