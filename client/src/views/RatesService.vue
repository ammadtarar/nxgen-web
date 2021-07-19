<template>
  <div class="dashboard">
    <div class="nav">
      <navbar />

      <div class="top-bar">
        <button
          @click="navIndex = 0"
          :class="{ active: navIndex == 0 }"
          class="bt"
        >
          Rate List
        </button>
        <button
          @click="navIndex = 1"
          :class="{ active: navIndex == 1 }"
          class="bt"
        >
          Packages
        </button>
      </div>

      <div class="content">
        <rates v-if="navIndex == 0" />
        <packages v-if="navIndex == 1" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RatesList from "../components/RateList.vue";
import Packages from "../components/Packages.vue";
export default {
  name: "RatesPackages",
  components: {
    navbar: NavBar,
    rates: RatesList,
    packages: Packages,
  },
  methods: {},
  data() {
    return {
      navIndex: 0,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .nav {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .top-bar {
    padding: 2rem 2rem 0rem 2rem;
    overflow: scroll;
    display: inline-flex;
    width: 100%;
    background: rgb(251, 251, 251);
    margin-top: 0.1rem;
    margin-bottom: 1rem;

    .bt {
      background: none;
      border: none;
      outline: none;
      font-size: 1.4rem;
      font-family: "P-400", sans-serif;
      color: gray;
      transition: 0.25s all ease-in;
      text-decoration: none;
      width: 12rem;
      padding: 1rem;

      &:hover {
        color: var(--clr-ylw);
      }
    }

    .active {
      font-family: "P-500", sans-serif;
      color: var(--clr-ylw);
      border-bottom: 0.2rem solid var(--clr-ylw);
    }
  }

  .content {
    height: calc(100vh - 18rem);
    overflow-y: scroll;
  }
}
</style>