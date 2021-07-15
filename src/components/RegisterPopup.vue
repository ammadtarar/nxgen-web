<template>
  <div>
    <popup
      title="Register"
      description="Register a new account to view , download and manager all your lab reports"
      :inputs="inputs"
      posActionName="Register"
      @onCancel="$emit('onCancel')"
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
};
</script>

<style lang="scss" scoped>
</style>