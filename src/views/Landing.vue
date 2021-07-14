<template>
  <div>
    <home />
    <about />
  </div>
</template>


<script>
import Home from "../components/Home.vue";
import About from "../components/About.vue";

export default {
  components: {
    home: Home,
    about: About,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
</style>