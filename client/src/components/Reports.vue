<template>
  <div class="reports">
    <table border="0" v-if="!isMobile">
      <thead style="position : fixed: top:0 ">
        <tr class="head">
          <th></th>
          <th>Lab Test Name</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(item, index) in reports">
          <td class="index">
            {{ index + 1 || "--" }}
          </td>
          <td>
            {{ item.name || "--" }}
          </td>
          <td>
            {{ item.date || "--" }}
          </td>
          <td>
            <div class="cell-actions">
              <button>View</button>
              <button>Downnload</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mobile-list" v-else>
      <div class="item" v-for="(item, index) in reports" :key="index">
        <span class="date">{{ item.date }}</span>
        <span class="name">{{ item.name }}</span>
        <div class="actions">
          <button>View</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reports",
  data() {
    return {
      reports: [
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
        {
          id: 0,
          name: "Some Report",
          date: "21 May 2021",
        },
      ],
    };
  },
  created() {
    this.isMobile = screen.width <= 690;
  },
  mounted() {
    this.isMobile = screen.width <= 690;
    console.log("IS MOBILE = ", this.isMobile);
  },
};
</script>

<style lang="scss" scoped>
.reports {
  width: 100%;
  height: auto;
  overflow-y: scroll;
  padding: 2rem;

  table {
    width: 100%;
    overflow-y: scroll;
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

    .cell-actions {
      display: flex;
      flex-wrap: wrap;

      button {
        background: none;
        border: 0.1rem solid var(--clr-ylw);
        padding: 0.8rem;
        border-radius: 0.4rem;
        color: var(--clr-ylw);
        transition: 0.25s all ease-in;

        &:first-child {
          margin-right: 0.4rem;
        }

        &:hover {
          background: var(--clr-ylw);
          color: white;
        }
      }
    }
  }

  .mobile-list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: column;
      background: white;
      width: 100%;
      box-shadow: 0.1rem 0.1rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
      border-radius: 0.8rem;
      margin-bottom: 2rem;
      overflow: hidden;

      .date {
        font-size: 1.2rem;
        font-family: "P-700", sans-serif;
        color: gray;
        padding: 1.4rem 1.2rem;
      }

      .name {
        font-size: 1.4rem;
        font-family: "P-300", sans-serif;
        color: black;
        padding: 0rem 1.2rem 1rem 1.2rem;
      }

      .actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0.4rem 1.2rem;
        background: rgba(233, 233, 233, 0.399);

        button {
          background: none;
          border: none;
          font-family: "P-600", sans-serif;
          font-size: 1.2rem;
          text-transform: uppercase;
          padding: 0.8rem;
          color: var(--clr-ylw);
          transition: 0.25s all ease-in;

          &:first-child {
            margin-right: 0.4rem;
          }

          &:focus {
            background: var(--clr-ylw);
            color: white;
          }
        }
      }
    }
  }
}
</style>