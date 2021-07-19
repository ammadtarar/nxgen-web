<template>
  <div>
    <home />
    <about />
    <services />
  </div>
</template>


<script>
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";

export default {
  components: {
    home: Home,
    about: About,
    services: Services,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
</style>