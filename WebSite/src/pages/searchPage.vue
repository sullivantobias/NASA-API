<template>
    <div class="container-fluid">
        <Img src="src/assets/imageComponentImages/full-moon.jpg" fluidGrow></Img>
        <Separator titleOfSection="Search"/>
        <SearchImages />
    </div>
</template>

<script>
  import Separator from '../components/SEPARATOR/SEPARATOR.vue';
  import SearchImages from '../components/SEARCHIMAGES/SEARCHIMAGES.vue'
  import Img from '../components/IMAGE/IMAGE.vue';

  export default {
    components: {Img, Separator, SearchImages},
  }
</script>
