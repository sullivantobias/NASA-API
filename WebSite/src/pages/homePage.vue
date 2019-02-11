<template>
    <div class="container-fluid">
        <Slider  />
        <Separator titleOfSection="Photo of the day" />
        <Apod />
    </div>
</template>

<script>

import Apod from '../components/APOD/APOD.vue';
import Slider from '../components/SLIDER/SLIDER.vue';
import Separator from '../components/SEPARATOR/SEPARATOR.vue'

  export default {
    components: {Apod, Slider, Separator}
  }

</script>
