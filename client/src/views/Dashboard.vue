<template>
  <div class="dashboard">
    <div class="nav">
      <navbar />

      <div class="top-bar">
        <router-link to="reports" active-class="active" class="button">
          <div class="inner">Reports</div>
        </router-link>
        <router-link to="appointments" active-class="active" class="button">
          <div class="inner">Appointments</div>
        </router-link>
        <router-link to="ratelist" active-class="active" class="button">
          <div class="inner">Rate List</div>
        </router-link>
        <router-link to="packages" active-class="active" class="button">
          <div class="inner">Packages</div>
        </router-link>
      </div>

      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Dashboard",
  components: {
    navbar: NavBar,
  },
  methods: {},
  mounted() {
    if (this.$route.name === "Dashboard") {
      this.$router.push("/dashboard/reports");
    }
  },
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

    .button {
      background: none;
      border: none;
      outline: none;
      font-size: 1.4rem;
      font-family: "P-400", sans-serif;
      color: gray;

      transition: 0.25s all ease-in;
      text-decoration: none;
      width: 12rem;

      .inner {
        width: 12rem;
        text-align: center;
        padding: 1rem;
      }

      &:hover {
        color: var(--clr-ylw);
      }

      .router-link-exact-active {
        background-color: indianred;
        cursor: pointer;
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