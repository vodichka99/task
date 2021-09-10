<template>
  <div class="edit-account">
    <div class="container">
      <div class="row">
        <h3 class="teal-text text-lighten-2 left-align">Edit Account</h3>
        <div class="input-field col s4" v-if="!confirmed">
          <span class="teal-text text-lighten-2">Enter Your Password</span>
          <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
          />
          <button class="waves-effect waves-light btn enter-btn" @click="login">
            enter
          </button>
        </div>
        <form class="col s4" @submit="onSubmit" v-else>
          <div class="row" v-for="input in inputs" :key="input.id">
            <div class="input-field col s12">
              <span class="teal-text text-lighten-2">{{ input.name }}</span>
              <input
                :id="input.id"
                :type="input.type"
                v-model="$data[input.id]"
              />
            </div>
          </div>
          <task-button-large>Submit</task-button-large>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TaskButtonLarge from "@/components/TaskButtonLarge";
export default {
  components: { TaskButtonLarge },
  data() {
    return {
      password: "",
      username: JSON.parse(localStorage.getItem("user")).username,
      email: JSON.parse(localStorage.getItem("user")).email,
      confirmed: false,
      inputs: [
        {
          id: "username",
          type: "text",
          name: "Change Name",
        },
        {
          id: "email",
          type: "email",
          name: "Change Email",
        },
        {
          id: "password",
          type: "password",
          name: "Change Password",
        },
      ],
    };
  },
  methods: {
    login() {
      const email = JSON.parse(localStorage.getItem("user")).email;
      this.$store
        .dispatch("login", { email, password: this.password })
        .then(() => {
          this.confirmed = true;
        });
    },
    onSubmit(e) {
      const id = JSON.parse(localStorage.getItem("user")).id
      e.preventDefault();
      this.$store
        .dispatch("updateUser", {
          email: this.email,
          password: this.password,
          username: this.username,
        })
        .then(() => {
          this.$router.push({
            name: "userpage",
            params: { id },
          });
        });
    },
  },
};
</script>
<style lang="scss">
.edit-account {
  h3 {
    padding: 0 0.75rem;
  }
  button {
    margin-top: 30px;
  }
  form {
    margin-top: 30px;
    padding: 0;
  }
}
</style>
