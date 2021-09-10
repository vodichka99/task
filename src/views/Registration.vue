<template>
  <div class="registration">
    <div class="container">
      <h3 class="teal-text text-lighten-2 center-align">Registration</h3>
      <div class="row">
        <form class="col s4 offset-s4" @submit="onSubmit">
          <div class="row" v-for="input in inputs" :key="input.id">
            <div class="input-field col s12">
              <input
                :id="input.id"
                :type="input.type"
                class=""
                v-model="$data[input.id]"
              />
              <label :for="input.id">{{ input.name }}</label>
            </div>
          </div>
          <task-button-large class="offset-s3">Submit</task-button-large>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TaskButtonLarge from "@/components/TaskButtonLarge";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    TaskButtonLarge,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      inputs: [
        {
          id: "firstName",
          type: "text",
          name: "First Name",
        },
        {
          id: "email",
          type: "email",
          name: "Email",
        },
        {
          id: "password",
          type: "password",
          name: "Password",
        },
      ],
      firstName: "",
      password: "",
      email: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (
        !this.v$.firstName.$invalid &&
        !this.v$.password.$invalid &&
        !this.v$.email.$invalid
      ) {
        this.$store
          .dispatch("register", {
            username: this.firstName,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.$router.push({
              name: "userpage",
              params: { id: this.$store.state.auth.currentUser.id },
            });
          });
      }
      this.firstName = "";
      this.password = "";
      this.email = "";
    },
  },
  validations() {
    return {
      firstName: { required },
      password: { required },
      email: { required, email },
    };
  },
};
</script>
