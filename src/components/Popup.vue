<template>
  <div class="popup">
    <div class="card">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <div class="inputs">
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
          class="pos"
          :class="{
            disabled: !enablePositiveButton,
            enabled: enablePositiveButton,
          }"
        >
          {{ posActionName }}
        </button>
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
  },
  data() {
    return {
      enablePositiveButton: false,
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

    .inputs {
      display: flex;
      width: 100%;
      flex-direction: column;
      overflow-y: scroll;
      height: auto;

      .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0rem;
        }

        select {
          flex: 1;
          max-height: 3.9rem;
          border-radius: 0.4rem;
          border: 0.1rem solid gray;
          background: white;
          padding: 0.8rem 1.2rem;
          font-family: "P-400", sans-serif;
          color: #495057;
          font-size: 1.3rem;
          outline: none;
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

  @media screen and (max-width: 500px) {
    .card {
      width: 100%;
      height: 100%;

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
</style>