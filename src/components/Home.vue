<template>
  <section id="home">
    <div class="home">
      <div class="nav">
        <navbar @onClickBurger="onClickBurger" />
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

        <div class="bullets">
          <div :class="{ active: carouselIndex == 0 }"></div>
          <div :class="{ active: carouselIndex == 1 }"></div>
          <div :class="{ active: carouselIndex == 2 }"></div>
        </div>
      </div>

      <div :style="{ 'z-index': menuOpened ? 0 : 2 }" class="buttons-wrapper">
        <div class="button-wrapper">
          <div class="button">
            <img src="../assets/icons/ic_book.png" alt="Book Appointment" />
            Book Appointment
          </div>
        </div>

        <div class="button-wrapper">
          <div class="button">
            <img src="../assets/icons/ic_whatsapp.png" alt="WhatsApp" />
            WhatsApp
          </div>
        </div>
      </div>
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

    .bullets {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 0.4rem;
      position: absolute;
      left: 7%;
      bottom: 7%;
      transform: translateX(-50%);
      z-index: 2;

      div {
        width: 1rem;
        height: 1rem;
        // border: 0.1rem solid var(--clr-ylw);
        background: white;
        border-radius: 50%;

        &:nth-child(1),
        &:nth-child(2) {
          margin-right: 0.6rem;
        }
      }

      .active {
        background: var(--clr-ylw);
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
      bottom: 1rem;

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

      .bullets {
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

  .animate__animated.animate__fadeIn {
    --animate-duration: 1s;
  }
}
</style>