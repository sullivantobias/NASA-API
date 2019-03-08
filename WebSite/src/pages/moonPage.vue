<template>
    <div class="container-fluid">
        <Img src="src/assets/imageComponentImages/full-moon.jpg" fluidGrow></Img>
        <Separator titleOfSection="Today's Moon Phase"></Separator>
        <div class="row">
            <LunarPhase  sizeMoonLaptop="500" sizeMoonTablet="400" sizeMoonMobile="300" nbColumns="12"></LunarPhase>
        </div>
        <Separator titleOfSection="Calendar's Moon's Phase"></Separator>
        <div class="row">
        </div>
    </div>
</template>

<script>

  import Img from '../components/IMAGE/IMAGE.vue';
  import Separator from '../components/SEPARATOR/SEPARATOR.vue';
  import LunarPhase from '../components/LUNARPHASE/LUNARPHASE.vue';
  import Accordion from "../components/ACCORDION/ACCORDION.vue";

  export default {
    components: {Accordion, Img, LunarPhase, Separator},
  }
</script>
