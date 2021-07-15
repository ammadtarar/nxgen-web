<template>
  <div>
    <popup
      title="Login"
      description="Login to your account to check your lab reports"
      :inputs="inputs"
      posActionName="Login"
      @onCancel="$emit('onCancel')"
    />
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "LoginPopup",
  components: {
    popup: Popup,
  },
  data() {
    return {
      inputs: [
        {
          id: "email",
          placeholder: "Your email address",
          type: "email",
          name: "Email",
          required: true,
          val: "",
        },
        {
          id: "password",
          placeholder: "Your account password",
          type: "password",
          name: "Password",
          required: true,
          val: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>