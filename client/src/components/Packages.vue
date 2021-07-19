<template>
  <div class="rl">
    <div class="wrapper">
      <div class="search-box">
        <span class="title"> Categories </span>
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
    <div class="table-wrapper">
      <table border="0">
        <thead>
          <tr class="head">
            <th></th>
            <th>Package Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="index" v-for="(item, index) in packages">
            <td class="index">
              {{ index + 1 || "--" }}
            </td>
            <td>
              <span
                style="font-family: 'P-500', sans-serif; padding-top: 1rem"
                >{{ item.name || "--" }}</span
              >
              <div class="package">
                <span v-for="(item, index) in item.items" :key="index">
                  {{ item }}
                </span>
              </div>
            </td>
            <td>Rs. {{ item.price || "--" }}</td>
          </tr>
        </tbody>
      </table>
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
    };
  },
  methods: {
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

  .table-wrapper {
    width: 70%;
    overflow-y: scroll;
    height: 88vh;

    .package {
      width: 100%;
      display: flex;
      flex-direction: column;
      span {
        margin-left: 2rem;
        padding: 0.2rem;

        &::before {
          content: "\25CF";
          color: var(--clr-ylw);
          margin-right: 1rem;
        }
      }
    }
    table {
      padding: 1rem;
      width: 100%;
      transition: all 0.25s;
      background: transparent;
      position: relative;

      td {
        color: black;
        font-family: "P-300", sans-serif;
        height: 5rem;
        border-bottom: 0.1rem solid #dbdde0;
        font-size: 1.3rem;
        text-align: left;
        padding: 0rem 1rem;
      }

      tr:hover {
        background: rgba(128, 128, 128, 0.02);
      }
      th {
        color: gray;
        font-family: "P-700", sans-serif;
        text-transform: uppercase;
        height: 5rem;
        border-bottom: 0.1rem solid #dbdde0;
        font-size: 1.2rem;
        text-align: left;
        padding: 0rem 1rem;
      }
      th {
        background: white;
        position: sticky;
        top: 0; /* Don't forget this, required for the stickiness */
      }

      .index {
        text-align: center;
        color: var(--clr-ylw);
        font-family: "P-700", sans-serif;
        font-size: 1.2rem;
        border-right: 0.1rem solid lightgray;
      }
    }
  }

  .wrapper {
    width: 30%;

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

@media screen and (max-width: 560px) {
  .rl {
    flex-direction: column;

    .table-wrapper {
      width: 100%;
      height: auto;
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