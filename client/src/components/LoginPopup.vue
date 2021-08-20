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
var qs = require("qs");
var axios = require("axios");

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
          placeholder: "Your phone number",
          type: "phone",
          name: "Phone",
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

      var data = qs.stringify({
        Username: email,
        Password: password,
        grant_type: "password",
      });
      var config = {
        method: "post",
        url: this.$URLS.baseURL + this.$URLS.AUTH.LOGIN,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: data,
      };

      let ctx = this;
      this.$HTTP(config)
        .then(function (response) {
          let data = JSON.parse(JSON.stringify(response.data));
          console.log(data);
          localStorage.setItem("phone", data.phone);
          localStorage.setItem("username", data.Username);
          localStorage.setItem("id", data.UserID);
          localStorage.setItem("name", data.FullName);
          localStorage.setItem("token", data.access_token);
          ctx.processing = false;
          ctx.$router.push("/dashboard");
        })
        .catch(function (error) {
          ctx.processing = false;
          console.log(error);
        });

      return;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>