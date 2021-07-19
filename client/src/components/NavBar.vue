<template>
  <div class="navbar">
    <img
      src="../assets/logo.png"
      alt="logo"
      id="logo"
      @click="$router.push('/')"
    />

    <div
      v-if="!isRatesList"
      class="actions"
      :class="{ 'actions-mobile-opened': isMobile && menuOpened }"
    >
      <a
        v-if="!isDashboard"
        id="bt-about"
        href="/#about"
        @click="menuOpened = false"
        >About</a
      >
      <a
        v-if="!isDashboard"
        id="bt-services"
        href="/#services"
        @click="menuOpened = false"
        >Services</a
      >

      <a
        v-if="!isDashboard"
        id="bt-rates"
        href="#rates"
        @click="menuOpened = false"
        >Rates & Packages</a
      >
      <a
        v-if="!isDashboard"
        id="bt-contact"
        href="/#footer"
        @click="menuOpened = false"
        >Contact</a
      >
      <div v-if="!isDashboard" class="spacer-mobile"></div>
      <a
        v-if="!isDashboard"
        id="login"
        @click="
          onClick('login');
          menuOpened = false;
        "
        >Login</a
      >
      <div v-if="!isDashboard" class="spacer"></div>
      <a
        v-if="!isDashboard"
        id="register"
        @click="
          onClick('register');
          menuOpened = false;
        "
        >Register</a
      >

      <a
        v-if="isDashboard"
        id="login"
        class="logout"
        @click="
          onClick('logout');
          menuOpened = false;
        "
        >Logout</a
      >
    </div>

    <div
      v-if="!isRatesList"
      class="burger"
      :class="{ 'burger-mobile-open': isMobile && menuOpened }"
      @click="
        menuOpened = !menuOpened;
        $emit('onClickBurger', menuOpened);
      "
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMobile: false,
      menuOpened: true,
      isDashboard: false,
      isRatesList: false,
    };
  },
  methods: {
    onClick(e) {
      if (e === "logout") {
        this.$router.push("/");
      }
      this.$emit("onClickNavBt", e);
    },
    isMobileDevice() {
      this.isMobile = screen.width <= 690;
    },
    windowResized() {
      this.isMobileDevice();
    },
  },
  mounted() {
    this.isMobileDevice();
    this.menuOpened = !this.isMobile;
    window.addEventListener("resize", this.windowResized);
    this.isDashboard = this.$parent.$options.name === "Dashboard";
    this.isRatesList = this.$parent.$options.name === "RatesPackages";
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 8rem;
  // background: rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.6)
  );
  display: flex;
  padding: 0rem 2rem;
  box-shadow: 0.1rem 0.1rem 0.6rem 0.2rem rgba(0, 0, 0, 0.2);

  #logo {
    height: 2.6rem;
    margin: auto 0rem;
  }

  .actions {
    margin-left: auto;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.6rem;
      font-family: "P-400", sans-serif;
      transition: all 0.25s ease-in;

      &:hover {
        color: var(--clr-ylw);
        transform: scale(1.1);
      }
    }

    .left {
      margin-left: 2rem;
    }

    #bt-about {
      margin-left: 5rem;
    }
    #bt-services {
      margin: 0rem 4rem;
    }

    #bt-rates {
      margin: 0;
      margin-right: 4rem;
    }

    #login {
      margin-left: auto;
    }

    .logout {
      color: #f44336;
      &:hover {
        color: #ff5252;
      }
    }
    .spacer {
      width: 0.1rem;
      height: 3rem;
      margin: 0rem 3rem;
      background: black;
    }

    .spacer-mobile {
      display: none;
    }
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 690px) {
    .actions {
      display: none;
      position: fixed;
      height: calc(100vh - 8rem);
      top: 8rem;
      right: -100vw;
      transition: all 0.25s ease-in;

      a {
        margin: 0rem !important;
      }

      .spacer {
        display: none;
      }

      .spacer-mobile {
        display: block;
        width: 10rem;
        height: 0.1rem;
        background: black;
      }
    }

    .burger {
      display: block;
      margin: auto 0rem auto auto;

      span {
        padding: 0.1rem 1rem;
        margin: 0.4rem 0rem;
        background: black;
        display: block;
        border-radius: 0.1rem;
        transition: all 0.25s ease-in-out;
        transition-delay: 0.2s;
      }
    }

    .actions-mobile-opened {
      display: block;
      position: absolute;
      z-index: 4 !important;
      width: 100%;
      height: calc(100vh - 8rem);
      right: 0;
      background: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10rem 0rem;
    }

    .burger-mobile-open {
      z-index: 3 !important;

      span {
        background: black !important;
        padding: 0.1rem 1.3rem !important;

        &:nth-child(1) {
          transform: rotate(-45deg) translate(-10.5px, -1px) !important;
          transform-origin: center;
          transition-delay: 0.25s !important;
          background: black !important;
        }

        &:nth-child(2) {
          background: transparent !important;
        }

        &:nth-child(3) {
          transform: rotate(45deg) translate(-9px, 2px) !important;
          transform-origin: center;
          transition-delay: 0.25s !important;
        }
      }
    }
  }
}
</style>

