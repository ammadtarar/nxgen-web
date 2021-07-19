<template>
  <div>
    <popup
      title="Login"
      description="Login to your account to check your lab reports"
      :inputs="inputs"
      posActionName="Login"
      @onCancel="$emit('onCancel')"
      @onCLickPositive="onClickLogin"
      :processing="processing"
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
      processing: false,
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
  methods: {
    onClickLogin() {
      this.processing = true;
      let email = this.inputs[0].val;
      let password = this.inputs[1].val;
      console.log(`Email = ${email} , Pasword = ${password}`);
      // TODO - INPLEMENT LOGIN API

      setTimeout(() => {
        this.processing = false;
        this.$router.push("/dashboard");
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>