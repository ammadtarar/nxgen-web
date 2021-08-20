<template>
  <div>
    <popup
      title="Register"
      description="Register a new account to view , download and manager all your lab reports"
      :inputs="inputs"
      posActionName="Register"
      @onCancel="$emit('onCancel')"
      @onCLickPositive="onClickRegister"
      :processing="processing"
    />
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "RegisterPopup",
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
        {
          id: "fullname",
          placeholder: "Your full name",
          type: "text",
          name: "Fullname",
          required: true,
          val: "",
        },
        {
          id: "phone",
          placeholder: "Your mobile phone number",
          type: "text",
          name: "Phone",
          required: true,
          val: "",
        },
        {
          id: "address",
          placeholder: "Your full address",
          type: "text",
          name: "Address",
          required: true,
          val: "",
        },
        {
          id: "city",
          placeholder: "Your current city",
          type: "text",
          name: "City",
          required: true,
          val: "",
        },
      ],
    };
  },
  methods: {
    onClickRegister() {
      this.processing = true;
      let email = this.inputs[0].val;
      let password = this.inputs[1].val;
      let fullname = this.inputs[2].val;
      let phone = this.inputs[3].val;
      let address = this.inputs[4].val;
      let city = this.inputs[5].val;
      console.log(
        `Email = ${email} , Pasword = ${password} , Name = ${fullname} , phone = ${phone} , address = ${address} , city = ${city}`
      );
      // TODO - INPLEMENT LOGIN API

      this.$HTTP
        .post(this.$URLS.AUTH.REGISTER, {
          FullName: fullname,
          Usr: phone,
          Pwd: password,
          Email: email,
          phone: phone,
          VerifyCode: "",
          Verified: "",
          Gender: "Male",
          Addres: address,
          City: city,
        })
        .then((res) => {
          this.processing = false;
          this.$Notifications.showNotification(
            "success",
            "Congratulations, your account has been created"
          );
          this.$emit("onSuccess", res.data);
          console.log("register res");
          console.log(res.data);
          let data = JSON.parse(JSON.stringify(res.data));
          console.log("data");
          console.log(data);
        })
        .catch((err) => {
          this.processing = false;
          console.log("register err");
          console.log(err);
        });

      // setTimeout(() => {
      //   this.processing = false;
      //   this.$router.push("/dashboard");
      // }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>