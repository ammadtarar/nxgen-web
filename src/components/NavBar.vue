<template>
  <div class="navbar">
    <img src="../assets/logo.png" alt="logo" id="logo" />

    <div
      class="actions"
      :class="{ 'actions-mobile-opened': isMobile && menuOpened }"
    >
      <a id="about" href="#about">About</a>
      <a id="services" href="#services">Services</a>
      <a id="contact" href="#contact">Contact</a>
      <a id="register" href="#register">Register</a>
      <a id="login" href="#login">Login</a>
    </div>

    <div
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
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 8rem;
  background: rgba(255, 255, 255, 0.8);
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

    #about {
      margin-left: 5rem;
    }
    #services,
    #contact,
    #login {
      margin-left: 3rem;
    }

    #register {
      margin-left: auto;
    }
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 690px) {
    .actions {
      display: none;
      position: absolute;
      height: calc(100vh - 8rem);
      top: 8rem;
      right: -100vw;
      transition: all 0.25s ease-in;

      a {
        margin-left: 0rem !important;
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

