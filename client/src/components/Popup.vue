<template>
  <div class="popup">
    <div
      class="card"
      :class="{
        'card-big': processedLayout === 'grid',
      }"
    >
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <div
        class="inputs"
        :class="{
          list: processedLayout === 'list',
          grid: processedLayout === 'grid',
        }"
      >
        <div class="input-container" v-for="item in inputs" :key="item.id">
          <label :for="item.id">{{ item.name }}</label>

          <select
            v-if="item.type == 'select'"
            :id="item.id"
            v-model="item.val"
            @input="
              (event) =>
                $emit('update:modelValue', (item.val = event.target.value))
            "
          >
            <option disabled value="">{{ item.placeholder }}</option>
            <option v-for="e in item.options" :key="e.key" :value="e.key">
              {{ e.value }}
            </option>
          </select>

          <input
            :disabled="processing"
            v-if="item.type != 'select'"
            :name="item.name"
            :id="item.id"
            v-model="item.val"
            :value="item.val"
            @input="onValueUpdated"
            :type="item.type"
            :placeholder="item.placeholder"
            autocomplete="nope"
          />
        </div>
      </div>

      <div class="actions">
        <button @click="$emit('onCancel')" class="neg">Cancel</button>
        <button
          v-if="!processing"
          @click="$emit('onCLickPositive')"
          class="pos"
          :class="{
            disabled: !enablePositiveButton,
            enabled: enablePositiveButton,
          }"
        >
          {{ posActionName }}
        </button>
        <div v-else class="processing">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    title: String,
    description: String,
    inputs: Array,
    posActionName: String,
    layout: {
      type: String,
      default: "list",
    },
    processing: Boolean,
  },
  data() {
    return {
      enablePositiveButton: false,
      processedLayout: "list",
    };
  },
  methods: {
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    onValueUpdated() {
      this.enablePositiveButton = this.inputs.every((item) => {
        if (item.type === "email") {
          return (
            item.val && item.val.length > 0 && this.validateEmail(item.val)
          );
        } else {
          return item.val && item.val.length > 0;
        }
      });
    },
  },
  mounted() {
    if (screen.width <= 450) {
      this.processedLayout = "list";
    } else {
      this.processedLayout = this.layout;
    }
  },
};
</script>

<style lang="scss" scoped>
.popup {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .card-big {
    width: 60vw !important;
  }
  .card {
    width: 40rem;
    height: auto;
    max-height: 90%;
    background: linear-gradient(rgba(255, 255, 255, 0.9), white, white, white);
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    overflow-y: scroll;

    h1 {
      font-size: 3rem;
      font-family: "P-600", sans-serif;
      color: black;
    }

    p {
      font-size: 1.5rem;
      font-family: "P-300", sans-serif;
      color: black;
      margin-top: 0.4rem;
      margin-bottom: 3rem;
    }

    .list {
      display: flex;
      flex-direction: column;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .inputs {
      width: 100%;
      overflow-y: scroll;
      height: auto;

      .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0rem;
        }

        label {
          font-size: 1.2rem;
          color: gray;
          font-family: "P-500", sans-serif;
          width: 100%;
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }

        input {
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
          color: black;
          outline: none;
          border: 0.1rem solid gray;
          border-radius: 0.2rem;
          width: 100%;
          padding: 1rem;
        }
      }
    }

    .actions {
      width: 100%;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      margin-top: 2rem;

      button {
        width: 50%;
        height: 100%;
        outline: none;
        font-size: 1.5rem;
        border: none;
        font-family: "P-400", sans-serif;
        border-radius: 0.4rem;
        margin-top: 3rem;
        transition: 0.25s all ease-in;

        &:first-child {
          margin-right: 0.5rem;
        }

        &:last-child {
          margin-left: 0.5rem;
        }

        &:hover {
          font-size: 1.7rem;
        }
      }

      .neg {
        border: 0.1rem solid black;
        background: transparent;
        color: black;
        background: white;
      }

      .pos {
        background: var(--clr-ylw);
        color: white;
      }

      .processing {
        width: 50%;
        height: 100%;
        background: var(--clr-ylw);
        margin-top: 3rem;
        border-radius: 0.4rem;
        display: flex;
        opacity: 0.7;
        cursor: not-allowed;

        div {
          width: 2.5rem;
          height: 2.5rem;
          border-top: 0.3em solid white;
          border-right: 0.3rem solid white;
          border-bottom: 0.3rem solid white;
          border-left: 0.3rem solid transparent;
          margin: auto;
          border-radius: 50%;
          overflow: hidden;
          animation: rotating 1s linear infinite;
        }
      }

      .disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .enabled {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 840px) {
    .card-big {
      width: 80% !important;
    }
  }

  @media screen and (max-width: 610px) {
    .card-big {
      width: 95% !important;
    }
  }

  @media screen and (max-width: 500px) {
    .card {
      width: 100%;
      height: 100%;
      max-height: 100% !important;

      .inputs {
      }

      .actions {
        flex-direction: column;
        height: auto;
        position: absolute;
        bottom: 5%;
        left: 2%;
        width: 96%;

        button {
          width: 100%;
          margin: 0;
          height: 5rem;

          &:first-child {
            margin-right: 0rem;
            // margin-top: 2rem;
          }

          &:last-child {
            margin-left: 0rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-height: 750px) {
    .inputs {
      // height: calc(100% - 10rem);
      // background: red;
      padding-bottom: 15rem;
    }

    .actions {
      button {
        box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.2);
      }
    }
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>