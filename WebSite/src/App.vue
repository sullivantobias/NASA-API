<template>
    <div id="app">
        <Nav v-if="!$route.name === 'test'" />
        <router-view name="home"/>
        <router-view name="test"/>
        <Footer v-if="!$route.name === 'test'" />
    </div>
</template>

<script>
  import Nav from './components/NAV/NAV.vue';
  import Footer from './components/FOOTER/FOOTER.vue';

  export default {
    name: "app",
    components: {Nav, Footer},
  };


</script>
<style lang="scss">
    @import "./helper/helper";

    .container-fluid {
        background-color: $c2;

        .component {
            margin-bottom: 30px;
        }
    }

</style>
