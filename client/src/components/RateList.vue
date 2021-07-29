<template>
  <div class="rl">
    <div class="wrapper">
      <div class="search-box">
        <span class="title"> Search </span>
        <span class="desc">Please enter test name to search the rate list</span>

        <div class="search-wrapper">
          <input
            @input="onValueUpdated"
            v-model="search"
            type="text"
            placeholder="Enter test name here"
          />
          <button
            @click="onClickClear"
            :class="{ disabled: search.length <= 0 }"
          >
            Clear Search
          </button>
        </div>
      </div>
    </div>
    <div class="table-wrapper">
      <table border="0">
        <thead>
          <tr class="head">
            <th></th>
            <th>Lab Test Name</th>
            <th>Sample</th>
            <th>Reporting Time</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="index + 1" v-for="(item, index) in reports">
            <td class="index">
              {{ index + 1 || "--" }}
            </td>
            <td>
              {{ item.name || "--" }}
            </td>
            <td>
              {{ item.sample || "--" }}
            </td>
            <td style="text-transform: capitalize">
              {{ item.time.toLowerCase() || "--" }}
            </td>
            <td>Rs. {{ item.price || "--" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const Rates = require("../data/ratelist.js");
export default {
  name: "RateList",
  data() {
    return {
      reports: [],
      search: "",
    };
  },
  methods: {
    onClickClear() {
      this.search = "";
      this.onValueUpdated();
    },
    onValueUpdated() {
      console.log("Hello");
      if (!this.search || this.search.length <= 0) {
        this.reports = Rates;
        return;
      }
      this.reports = Rates.filter((item) => {
        console.log("item");
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.reports = Rates;
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
    width: 75%;
    overflow-y: scroll;
    height: 88vh;
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

      .search-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
          width: 100%;
          height: 5rem;
          border: 0.1rem solid lightgray;
          padding: 1rem;
          color: black;
          font-size: 1.5rem;
          font-family: "P-500", sans-serif;
          outline: none;
          border-radius: 0.4rem;
        }

        button {
          width: 100%;
          height: 5rem;
          background: var(--clr-ylw);
          font-size: 1.6rem;
          font-family: "P-600", sans-serif;
          color: white;
          outline: none;
          border: none;
          margin-top: 1rem;
          padding: 1rem 0rem;
          border-radius: 0.4rem;
        }
      }

      .disabled {
        background: lightgray;
        cursor: not-allowed;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .rl {
    flex-direction: column;

    .table-wrapper {
      width: 100%;
    }

    .wrapper {
      width: 100%;

      .search-box {
        margin-bottom: 1rem;
        .title {
          font-size: 1.6rem;
        }

        .desc {
          margin: 0.5rem 0rem;
          font-size: 1.2rem;
        }

        .search-wrapper {
          flex-direction: row;
          input {
            height: 4rem;
            font-size: 1.3rem;
          }
          button {
            width: 5rem;
            height: 4rem;
            padding: 0rem;
            margin: 0rem 0rem 0rem 1rem;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>