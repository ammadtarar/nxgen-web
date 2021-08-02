<template>
  <div class="rl">
    <div class="wrapper">
      <div class="search-box">
        <span class="title"> Categories</span>
        <span class="desc"
          >Please select a category to explore the health packages</span
        >
        <div class="categories" v-if="!isMobile">
          <div
            class="category"
            v-bind:key="item.index"
            v-for="item in reports"
            :class="{ selected: selectedCategory === item.name }"
            @click="onClickCategory(item)"
          >
            {{ item.name }}
          </div>
        </div>

        <select v-else @input="(item) => onClickCategory(item.target.value)">
          <option v-for="item in reports" :key="item.name" :value="item.name">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="grid">
      <div
        class="grid-item"
        v-for="(item, index) in packages"
        :key="index"
        @click="onClickGridItem(item)"
      >
        <img :src="item.img" :alt="item.name" class="cover" />
        <div class="overlay">
          <span class="title">{{ item.name }}</span>
          <div class="click">Click for Details</div>
          <span class="price">Rs. {{ item.price }}</span>
        </div>
      </div>
    </div>

    <div class="package-card" v-if="detailItem">
      <div class="card">
        <img :src="detailItem.img" :alt="detailItem.name" />
        <div class="overlay">
          <img
            src="../assets/icons/ic_close_orange.png"
            class="close"
            @click="detailItem = null"
            alt=""
          />
          <span class="title">{{ detailItem.name }}</span>
          <div class="tests">
            <span class="title">Tests included in the packages :</span>
            <div class="package">
              <span v-for="(item, index) in detailItem.items" :key="index">
                {{ item }}
              </span>
            </div>
          </div>
          <span class="price">Rs. {{ detailItem.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Packages = require("../data/packages.js");
export default {
  name: "Packages",
  data() {
    return {
      reports: [],
      packages: [],
      selectedCategory: "WOMEN HEALTH SCREENING PROFILE",
      isMobile: false,
      detailItem: null,
    };
  },
  methods: {
    onClickGridItem(item) {
      this.detailItem = item;
    },
    onClickCategory(category) {
      console.log("sup");
      console.log(typeof category);
      if (typeof category === "string") {
        this.reports.forEach((item) => {
          if (item.name === category) {
            this.selectedCategory = item.name;
            this.packages = item.packages;
            return;
          }
        });
      } else {
        this.selectedCategory = category.name;
        this.packages = category.packages;
      }
    },
    isMobileDevice() {
      this.isMobile = screen.width <= 690;
    },
    windowResized() {
      this.isMobileDevice();
    },
  },
  mounted() {
    this.reports = Packages;
    this.onClickCategory(this.reports[0]);
    this.isMobileDevice();
    window.addEventListener("resize", this.windowResized);
  },
};
</script>

<style lang="scss" scoped>
.rl {
  margin: auto;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .package-card {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.4);

    .card {
      width: 30vw;
      min-height: 60vh;
      background: white;
      display: flex;
      flex-direction: row;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 1rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        left: 0;
        top: 0;
      }

      .overlay {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
        display: flex;
        padding: 3rem;
        flex-direction: column;

        .title {
          color: black;
          font-size: 2.6rem;
          font-family: "P-600", sans-serif;
          margin-top: 2rem;
        }

        .price {
          color: orange;
          font-family: "P-800", sans-serif;
          font-size: 2.2rem;
          margin-top: auto;
          margin-left: auto;
        }

        .close {
          width: 3rem;
          height: 3rem;
          border: 0.25rem solid orange;
          border-radius: 50%;
          position: absolute;
          left: calc(100% - 4rem);
          top: 1rem;
          transition: 0.25s all ease-in-out;

          &:hover {
            transform: scale(1.2) translate(-0.2rem, 0.2rem);
            background: rgba(255, 166, 0, 0.2);
          }
        }

        .tests {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          margin-left: 2rem;

          .title {
            color: black;
            font-size: 1.6rem;
            font-family: "P-400", sans-serif;
          }

          .package {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            span {
              margin-left: 1rem;
              padding: 0.2rem;
              font-size: 1.5rem;

              &::before {
                content: "\25CF";
                color: var(--clr-ylw);
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
  }

  .grid {
    width: 73%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    overflow-y: scroll;
    max-height: 88vh;
    padding: 1rem;
    margin-top: -1rem;

    .grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 30rem;
      border-radius: 0.4rem;
      overflow: hidden;
      box-shadow: 0.1rem 0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
      transition: 0.25s all ease-in;

      .click {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s all ease-in-out;
        background: none;
        color: orange;
        font-family: "P-600", sans-serif;
        font-size: 1.2rem;
        border: 0.2rem solid orange;
        padding: 0.4rem 0.8rem;
        border-radius: 2rem;

        &:hover {
          background: orange;
          color: white;
          transform: scale(1.2) translate(-40%, -40%);
        }
      }

      &:hover {
        .click {
          opacity: 1;
          margin: auto;
        }
        .cover {
          transform: scale(1.2);
        }
        .overlay {
          background: rgba(0, 0, 0, 0.4);
          .title {
            color: white;
          }
        }
      }

      .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        object-fit: cover;
        object-position: center;
        transition: 0.5s all ease-in-out;
      }

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0.5),
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.7)
        );
        display: flex;
        padding: 2rem;
        flex-direction: column;

        .title {
          color: black;
          font-size: 2.6rem;
          font-family: "P-600", sans-serif;
        }

        .price {
          color: white;
          font-family: "P-800", sans-serif;
          font-size: 1.8rem;
          margin-top: auto;
          margin-left: auto;
        }
      }
    }
  }

  .wrapper {
    width: 25%;

    .search-box {
      width: 100%;
      background: rgba(128, 128, 128, 0.05);
      margin-top: 3rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.3rem 0.3rem rgba(0, 0, 0, 0.08);
      margin: auto;

      .title {
        font-size: 2rem;
        font-family: "P-700", sans-serif;
        color: black;
      }

      .desc {
        font-size: 1.4rem;
        font-family: "P-400", sans-serif;
        color: gray;
        margin: 1rem 0rem;
      }

      .categories {
        transition: 0.25s all ease-in;
        display: flex;
        flex-wrap: wrap;
        .category {
          width: 10rem;
          width: auto;
          padding: 0.6rem 0.9rem;
          margin-right: 1rem;
          margin-top: 1rem;
          font-size: 1.4rem;
          background: rgba(223, 222, 222, 0.705);
          color: black;
          font-family: "P-500", sans-serif;
          border-radius: 1rem;

          &:last-child {
            margin-right: 0rem;
          }
        }

        .selected {
          background: var(--clr-ylw);
          font-family: "P-600", sans-serif;
          color: white;
          border: 0.1rem solid lightgray;
        }
      }
    }
  }
}

@media screen and (max-height: 680px) {
  .rl {
    .package-card {
      .card {
        .overlay {
          .tests {
            .package {
              display: grid;
              grid-template-columns: 1fr 1fr;
              span {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
  .package {
    display: grid;
    grid-template-columns: 1fr 1fr;
    span {
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 320px) {
  .rl {
    .grid {
      grid-template-columns: 1fr !important;
      .grid-item {
        height: 18rem !important;
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .rl {
    flex-direction: column;

    .grid {
      width: 100%;
      height: auto;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;

      .grid-item {
        height: 20rem;
        .overlay {
          padding: 1rem;
          background: linear-gradient(
            white,
            white,
            white,
            rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.9)
          );
          .title {
            font-size: 1.6rem;
          }
        }
      }
    }

    .package-card {
      .card {
        width: 90vw;
        height: 90vh;
        overflow-y: scroll;

        .overlay {
          .title {
            font-size: 1.8rem;
          }

          .tests {
            margin-left: 0;
            margin-top: 0;
            max-height: 34rem;

            .title {
              font-family: "P-300", sans-serif;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
    .wrapper {
      width: 100%;

      .search-box {
        .title {
          font-size: 1.6rem;
        }

        .desc {
          margin: 0.5rem 0rem;
          font-size: 1.2rem;
        }

        select {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>