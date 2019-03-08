<template>
    <div class="container-fluid">
        <h1> TEST HEADER </h1>
        <!--<Accordion :accordions="accdns">
        </Accordion>-->

        <LunarPhase dayPhase :nbColumns="4"></LunarPhase>
        <footer>
            <h1>TEST FOOTER</h1>

        </footer>
    </div>
</template>

<script>
  import Img from '../components/IMAGE/IMAGE.vue';
  import Accordion from '../components/ACCORDION/ACCORDION.vue';
  import LunarPhase from '../components/LUNARPHASE/LUNARPHASE.vue';

  export default {
    components: {Img, Accordion, LunarPhase},
    data() {
      return {
        accdns: [
          {
            title: 'First Accordion',
            id: 'first',
            informations: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          },
          {
            title: 'Second Accordion',
            id: 'second',
            informations: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
        ]
      }
    }
  }

</script>
