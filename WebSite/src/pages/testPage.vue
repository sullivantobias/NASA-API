<template>
    <div class="container-fluid">
        <h1> TEST HEADER </h1>
        <Accordion :accordions="accdns">
            <div slot="first">
                <Separator slot="component" titleOfSection="Test1"></Separator>
                <LunarPhase dayPhase></LunarPhase>
            </div>
            <div slot="second">
                <Separator titleOfSection="Test2"></Separator>
            </div>
            <div slot="third">
                <Separator titleOfSection="Test3"></Separator>
            </div>
        </Accordion>
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
