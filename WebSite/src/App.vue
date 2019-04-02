<template>
    <div id="app">
        <Nav />
        <router-view name="home"/>
        <router-view name="moon"/>
        <router-view name="search"/>
        <router-view name="test"/>
        <Footer />
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
