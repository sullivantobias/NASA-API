<template>
    <div id="app">
        <router-view name="home"/>
    </div>
</template>

<script>
  export default {
    name: "app",
    components: {},
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
