<template>
  <div class="appointments">
    <table border="0" v-if="!isMobile">
      <thead style="position : fixed: top:0 ">
        <tr class="head">
          <th></th>
          <th>Patient</th>
          <th>Test Name</th>
          <th>Date</th>
          <th>Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(item, index) in reports">
          <td class="index">
            {{ index + 1 || "--" }}
          </td>
          <td>
            {{ item.patient || "--" }}
          </td>
          <td>
            {{ item.test_name || "--" }}
          </td>
          <td>
            {{ item.date || "--" }}
          </td>
          <td>
            {{ item.type || "--" }}
          </td>
          <td style="text-transform: capitalize">
            {{ item.status || "--" }}
          </td>
          <td>
            <div class="cell-actions">
              <button :class="{ disabled: item.status != 'pending' }">
                Cancel Appointment
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mobile-list" v-else>
      <div class="item" v-for="(item, index) in reports" :key="index">
        <div class="date-status">
          <span class="date">{{ item.date }}</span>
          <span class="status">{{ item.status }}</span>
        </div>
        <span class="patient">{{ item.patient }}</span>
        <span class="test">{{ item.test_name }}</span>
        <span class="type">{{ item.type }}</span>
        <div class="actions" v-if="item.status == 'pending'">
          <button>Cancel Appointment</button>
        </div>
      </div>
    </div>

    <button class="add" @click="showBookingPopup = true">+</button>

    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <book v-if="showBookingPopup" @onCancel="showBookingPopup = false" />
    </transition>
  </div>
</template>

<script>
import BookAppointment from "../components/BookAppointmentPopup.vue";
export default {
  name: "Appointments",
  components: {
    book: BookAppointment,
  },
  data() {
    return {
      showBookingPopup: false,
      reports: [
        {
          id: 0,
          patient: "Ammad Amjad",
          test_name: "Blood Test",
          type: "Home Pickup",
          date: "13 July 2021",
          status: "pending",
        },
        {
          id: 0,
          patient: "Ammad Amjad",
          test_name: "Blood Test",
          type: "Home Pickup",
          date: "13 July 2021",
          status: "completed",
        },
        {
          id: 0,
          patient: "Ammad Amjad",
          test_name: "Blood Test",
          type: "Home Pickup",
          date: "13 July 2021",
          status: "cancelled",
        },
        {
          id: 0,
          patient: "Ammad Amjad",
          test_name: "Blood Test",
          type: "Home Pickup",
          date: "13 July 2021",
          status: "pending",
        },
        {
          id: 0,
          patient: "Ammad Amjad",
          test_name: "Blood Test",
          type: "Home Pickup",
          date: "13 July 2021",
          status: "pending",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      console.log(status);
      if (status == "pending") {
        return "var(--clr-ylw)";
      } else if (status == "completed") {
        return "green";
      } else {
        return "gray";
      }
    },
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
.appointments {
  width: 100%;
  height: auto;
  overflow-y: scroll;
  padding: 2rem;
  position: relative;

  table {
    z-index: 1;
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

        &:hover {
          background: var(--clr-ylw);
          color: white;
        }
      }

      .disabled {
        border-color: gray;
        color: gray;

        &:hover {
          cursor: not-allowed;
          background: transparent;
          color: gray;
        }
      }
    }
  }

  .mobile-list {
    z-index: 1;
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

      .date-status {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.2rem;
        font-family: "P-600", sans-serif;
        padding: 1.4rem 1.2rem;
        color: gray;

        .status {
          text-transform: uppercase;
        }

        .pending {
          color: #fff176;
        }

        .completed {
          color: #1de9b6;
        }

        .cancelled {
          color: #ef5350;
        }
      }

      .patient {
        font-size: 1.3rem;
        font-family: "P-700", sans-serif;
        color: black;
        padding: 0rem 1.2rem 1rem 1.2rem;
      }

      .test,
      .type {
        font-size: 1.2rem;
        font-family: "P-400", sans-serif;
        color: black;
        padding: 0rem 1.2rem 1rem 1.2rem;
      }

      .actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: rgba(233, 233, 233, 0.399);

        button {
          background: none;
          border: none;
          font-family: "P-600", sans-serif;
          font-size: 1.2rem;
          text-transform: uppercase;
          padding: 1.4rem 0rem;
          color: var(--clr-ylw);
          transition: 0.25s all ease-in;

          &:focus {
            background: var(--clr-ylw);
            color: white;
          }
        }
      }
    }
  }

  .add {
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    line-height: 3rem;
    font-size: 3rem;
    background: var(--clr-ylw);
    color: white;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    text-align: center;
    z-index: 2;
    border: none;
    border-radius: 50%;
    box-shadow: 0.1rem 0.1rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
  }
}
</style>