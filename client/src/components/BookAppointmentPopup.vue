<template>
  <div>
    <popup
      title="Book Appointment"
      description="Enter your details to book appointment for medical test , either for home sample pickup or on location testing"
      :inputs="inputs"
      layout="grid"
      posActionName="Book"
      @onCancel="$emit('onCancel')"
    />
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "BookAppointmentPopup",
  components: {
    popup: Popup,
  },
  data() {
    return {
      inputs: [
        {
          id: "name",
          placeholder: "Your full name",
          type: "text",
          name: "Fullname",
          required: true,
          val: "",
        },
        {
          id: "gender",
          placeholder: "Please select your gender",
          type: "select",
          name: "Gender",
          options: [
            {
              key: "male",
              value: "Male",
            },
            {
              key: "female",
              value: "Female",
            },
          ],
          required: true,
          val: "",
        },
        {
          id: "phone",
          placeholder: "Your phone number",
          type: "text",
          name: "Phone",
          required: true,
          val: "",
        },
        {
          id: "email",
          placeholder: "Your email address",
          type: "text",
          name: "Email",
          required: true,
          val: "",
        },
        {
          id: "test",
          placeholder: "Whcih lab test you are seeking ?",
          type: "text",
          name: "Lab Test Name",
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
          placeholder: "Which city are you in ?",
          type: "text",
          name: "City",
          required: true,
          val: "",
        },
        {
          id: "mode",
          placeholder: "home pickup or on-site",
          type: "select",
          name: "Mode",
          options: [
            {
              key: "home",
              value: "Home sample pickup",
            },
            {
              key: "on-site",
              value: "Visit lab yourself",
            },
          ],
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