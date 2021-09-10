<template>
  <div class="delete-page">
    <div class="container">
      <div class="row">
        <h3 class="red-text text-lighten-2 left-align">Delete Page</h3>
        <div class="input-field col s4">
          <span class="teal-text text-lighten-2">Enter Your Password</span>
          <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
          />
          <!-- <label class="teal-text text-lighten-2" for="password">Enter Your Password</label> -->
          <button
            class="waves-effect waves-light btn red delete-btn"
            @click="deleteAccount"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    deleteAccount() {
      this.$store.dispatch("deleteUser", this.password)
      .then(() => {
        alert('account has been deleted')
        this.$router.push({name: 'home'})
      })
    },
  },
};
</script>
<style lang="scss">
.delete-page {
  .input-field {
    padding: 0;
  }
  .delete-btn {
    margin-top: 15px;
  }
}
</style>
