<template>
    <div id="app">
        <Nav />
        <router-view name="home"/>
    </div>
</template>

<script>
  import Nav from './components/NAV/NAV.vue';

  export default {
    name: "app",
    components: {Nav},
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
