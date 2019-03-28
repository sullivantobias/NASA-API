<template>
    <div class="container-fluid">
        <Img src="src/assets/imageComponentImages/full-moon.jpg" fluidGrow></Img>
        <Separator titleOfSection="Today's Moon Phase"></Separator>
        <div class="row">
            <LunarPhase dayPhase sizeMoonLaptop="500" sizeMoonTablet="400" sizeMoonMobile="300"
                        nbColumns="12"/>
        </div>
        <Accordion :accordions="accordionInformations">
            <LunarPhase slot="calendar" calendarPhases
                        nbColumns="12"/>
            <LunarPhase slot="importantPhases" importantPhases sizeMoonLaptop="200" sizeMoonTablet="150"
                        sizeMoonMobile="100"
                        nbColumns="12"/>
            <LunarPhase slot="distance" distance
                        nbColumns="12"/>
            <LunarPhase slot="nextFullMoon" nextFullMoon
                        nbColumns="12"/>
        </Accordion>
    </div>
</template>

<script>

  import Img from '../components/IMAGE/IMAGE.vue';
  import Separator from '../components/SEPARATOR/SEPARATOR.vue';
  import LunarPhase from '../components/LUNARPHASE/LUNARPHASE.vue';
  import Accordion from "../components/ACCORDION/ACCORDION.vue";

  export default {
    components: {Accordion, Img, LunarPhase, Separator},
    data() {
      return {
        accordionInformations: [
          {
            title: "Calendar's Moon's Phases",
            id: 'calendar'
          },
          {
            title: "Important Phases",
            id: 'importantPhases'
          },
          {
            title: "Distance",
            id: 'distance'
          },
          {
            title: "Next Full Moon",
            id: 'nextFullMoon'
          }
        ]
      }
    }
  }

</script>
