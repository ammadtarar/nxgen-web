<template>
  <section id="home">
    <div class="home">
      <div class="nav">
        <navbar @onClickBurger="onClickBurger" />
      </div>
      <div class="images"></div>
      <div :style="{ 'z-index': menuOpened ? 0 : 2 }" class="btns"></div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Home",
  components: {
    navbar: NavBar,
  },
  data() {
    return {
      menuOpened: false,
    };
  },
  methods: {
    onClickBurger(menuOpened) {
      this.menuOpened = menuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: red;
  position: relative;

  .nav {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .images {
    width: 100%;
    height: 100%;
    background: orange;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .btns {
    width: 10rem;
    height: 4rem;
    background: blue;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>