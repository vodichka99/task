<template>
  <div class="user-page">
    <div class="container">
      <h3 class="teal-text text-lighten-2">User Page</h3>
      <span class="name teal-text text-lighten-2">
        Name: {{ user.username }}
      </span>
      <span class="email teal-text text-lighten-2">
        Email: {{ user.email }}
      </span>
      <div class="buttons">
        <button
          class="waves-effect waves-light btn red delete-btn"
          @click="toDelete"
        >
          delete account
        </button>
        <button
          class="waves-effect waves-light btn to-edit-btn"
          @click="toEdit"
        >
          edit account
        </button>
        <button class="waves-effect waves-light btn" @click="toDataBase">
          show database
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    toDelete() {
      this.$router.push({ name: "delete", params: { id: this.user.id } });
    },
    toEdit() {
      this.$router.push({ name: "edit", params: { id: this.user.id } });
    },
    toDataBase() {
      this.$router.push({ name: "database" });
    }
  },
};
</script>
<style lang="scss">
.user-page {
  .container {
    display: flex;
    flex-direction: column;
    font-size: 32px;
    align-items: flex-start;
    .buttons {
      margin-top: 30px;
      .delete-btn {
        margin-right: 20px;
      }
      .to-edit-btn {
        margin-right: 20px;
      }
    }
    .name {
      margin-top: 15px;
    }
  }
}
</style>
