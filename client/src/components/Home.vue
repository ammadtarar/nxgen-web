<template>
  <section id="home">
    <div class="home">
      <div class="nav">
        <navbar @onClickBurger="onClickBurger" @onClickNavBt="onClickNavBt" />
      </div>

      <div class="carousel">
        <div>
          <div v-for="item in images" :key="item.id">
            <div v-if="item.id == carouselIndex">
              <img
                class="animate__animated animate__fadeIn"
                :src="item.src"
                :alt="item.title"
                :key="carouselIndex"
              />
              <span
                class="animate__animated animate__pulse"
                v-html="item.title"
              ></span>
            </div>
          </div>
        </div>

        <div class="bullets-wrapper">
          <div class="nav-btn" @click="goToLastCarousel">
            <div class="triangle triangle-left"></div>
          </div>
          <div class="bullets">
            <div :class="{ active: carouselIndex == 0 }"></div>
            <div :class="{ active: carouselIndex == 1 }"></div>
            <div :class="{ active: carouselIndex == 2 }"></div>
          </div>
          <div class="nav-btn" @click="goToNextCarousel">
            <div class="triangle triangle-right"></div>
          </div>
        </div>
      </div>

      <div :style="{ 'z-index': menuOpened ? 0 : 2 }" class="buttons-wrapper">
        <div class="button-wrapper" @click="showAppointment = true">
          <div class="button">
            <img src="../assets/icons/ic_book.png" alt="Home Sampling" />
            Home Sampling
          </div>
        </div>

        <a
          class="button-wrapper"
          href="//api.whatsapp.com/send?phone=923111555586"
          style="color: black; text-decoration: none"
        >
          <div class="button">
            <img src="../assets/icons/ic_whatsapp.png" alt="WhatsApp" />
            WhatsApp
          </div>
        </a>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <login v-if="showLogin" @onCancel="showLogin = false" />
    </transition>
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <register
        v-if="showRegister"
        @onCancel="showRegister = false"
        @onSuccess="showRegister = false"
      />
    </transition>

    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <login v-if="showLogin" @onCancel="showLogin = false" />
    </transition>
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <bookAppointmentPopup
        v-if="showAppointment"
        @onCancel="showAppointment = false"
      />
    </transition>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import LoginPopup from "../components/LoginPopup.vue";
import RegisterPopup from "../components/RegisterPopup.vue";
import BookAppointmentPopup from "../components/BookAppointmentPopup.vue";

export default {
  name: "Home",
  components: {
    navbar: NavBar,
    login: LoginPopup,
    register: RegisterPopup,
    bookAppointmentPopup: BookAppointmentPopup,
  },
  data() {
    return {
      showAppointment: false,
      showLogin: false,
      showRegister: false,
      menuOpened: false,
      image: {
        src: "",
        title: "",
      },
      carouselIndex: 0,
      images: [
        {
          id: 0,
          src: require("../assets/images/home_1.jpeg"),
          title: "high quality<br />low cost<br />diagnostics</span",
        },
        {
          id: 1,
          src: require("../assets/images/home_2.jpeg"),
          title: "eduacted and <br />qualified lab <br />professionals",
        },
        {
          id: 2,
          src: require("../assets/images/home_3.jpg"),
          title: "high tech <br />cutting edge<br />lab equipment",
        },
      ],
    };
  },
  methods: {
    goToNextCarousel() {
      if (this.carouselIndex == 2) {
        this.carouselIndex = 0;
      } else {
        this.carouselIndex = this.carouselIndex + 1;
      }
    },
    goToLastCarousel() {
      if (this.carouselIndex <= 0) {
        this.carouselIndex = 2;
      } else {
        this.carouselIndex = this.carouselIndex - 1;
      }
    },
    onClickNavBt(e) {
      this.showLogin = e == "login";
      this.showRegister = e == "register";
    },
    onClickBurger(menuOpened) {
      this.menuOpened = menuOpened;
    },
    goToNextCarouselImage() {
      this.carouselIndex = this.carouselIndex + 1;
      if (this.carouselIndex >= 3) {
        this.carouselIndex = 0;
      }
      this.refreshCarouselImage();
    },
    refreshCarouselImage() {
      this.image = this.images[this.carouselIndex];
    },
  },
  mounted() {
    this.refreshCarouselImage();

    setInterval(() => {
      this.goToNextCarouselImage();
    }, 6000);
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  position: relative;

  .nav {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .carousel {
    width: 100%;
    height: 100%;
    background: rgb(44, 44, 44);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;

    img {
      display: block;
      height: 100vh;
      -o-object-fit: cover;
      object-fit: cover;
      width: 100%;
      position: relative;
    }

    span {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10rem;
      font-size: 8rem;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      font-family: "P-700", sans-serif;
      text-align: center;
    }

    .bullets-wrapper {
      position: absolute;
      left: 7%;
      bottom: 7%;
      transform: translateX(-50%);
      z-index: 2;
      display: flex;
      align-items: center;

      .bullets {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.2);
        padding: 1rem;
        border-radius: 0.4rem;

        div {
          width: 1rem;
          height: 1rem;
          // border: 0.1rem solid var(--clr-ylw);
          background: white;
          opacity: 0.3;
          border-radius: 50%;
          transition: 0.5s all ease-in-out;

          &:nth-child(1),
          &:nth-child(2) {
            margin-right: 0.6rem;
          }
        }

        .active {
          background: var(--clr-ylw);
          opacity: 1;
        }
      }

      .nav-btn {
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .triangle {
          width: 0;
          height: 0;
          border-top: 0.8rem solid transparent;
          border-bottom: 0.8rem solid transparent;
          transition: 0.35s all ease-in;

          &:hover {
            transform: scale(1.1) translateY(-0.1rem);
          }
        }

        .triangle-left {
          border-right: 1.2rem solid rgba(255, 255, 255, 0.4);

          &:hover {
            border-right-color: var(--clr-ylw);
          }
        }

        .triangle-right {
          border-left: 1.2rem solid rgba(255, 255, 255, 0.4);

          &:hover {
            border-left-color: var(--clr-ylw);
          }
        }
      }
    }
  }

  .buttons-wrapper {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;

    .button-wrapper {
      background: rgba(255, 255, 255, 0.9);
      padding: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      transition: 0.1s all ease-in-out;
      box-shadow: 0.1rem 0.1rem 0.4rem 0.4rem rgba(0, 0, 0, 0.2);

      &:hover {
        padding: 0rem;
        border: 0.4rem solid var(--clr-ylw);

        .button {
          border: none;
          color: var(--clr-ylw);
        }
      }

      &:nth-child(2) {
        margin-left: 1rem;
      }

      .button {
        border-radius: 1rem;
        font-family: "P-500", sans-serif;
        border: 0.2rem solid var(--clr-ylw);
        width: 22rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-align: center;
        img {
          width: 3rem;
          margin-right: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 690px) {
    .buttons-wrapper {
      flex-direction: column;
      bottom: -1rem;

      .button-wrapper {
        &:nth-child(2) {
          margin-left: 0;
          margin-top: 1rem;
        }
      }
    }

    .carousel {
      span {
        padding: 1rem;
        font-size: 4rem;
      }

      .bullets-wrapper {
        left: 50%;
        bottom: 2%;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .carousel {
      span {
        font-size: 3rem;
      }
    }
  }
}
</style>