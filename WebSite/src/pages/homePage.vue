<template>
    <div class="container">
        <Slider  />
        <Apod />
    </div>
</template>

<script>

import Apod from '../components/APOD/APOD.vue';
import Slider from '../components/SLIDER/SLIDER.vue';

  export default {
    components: {Apod, Slider}
  }

</script>
