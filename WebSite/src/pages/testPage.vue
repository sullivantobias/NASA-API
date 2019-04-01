<template>
    <div class="container-fluid">
        <h1> TEST HEADER </h1>
        <LunarPhase></LunarPhase>
        <footer>
            <h1>TEST FOOTER</h1>
        </footer>
    </div>
</template>

<script>
  import Img from '../components/IMAGE/IMAGE.vue';
  import Accordion from '../components/ACCORDION/ACCORDION.vue';
  import LunarPhase from '../components/LUNARPHASE/LUNARPHASE.vue';
  import Separator from '../components/SEPARATOR/SEPARATOR.vue';

  export default {
    components: {Img, Accordion, LunarPhase, Separator},
    data() {
      return {
        accdns: [
          {
            title: 'First Accordion',
            id: 'first',
          },
          {
            title: 'Second Accordion',
            id: 'second',
          },
          {
            title: 'Third Accordion',
            id: 'third',
          }
        ]
      }
    }
  }
</script>
