<template>
  <div class="home">
    <div class="container">
      <h2 class="blue-grey-text text-darken-1 center-align">Test Task</h2>
      <div class="row">
        <div class="col s4 offset-s4">
          <router-link class="col s6 center-align teal-text text-lighten-2" :to="{ name: 'registration' }">Sign Up</router-link>
          <router-link class="col s6 center-align teal-text text-lighten-2" :to="{ name: 'login' }">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss">
.home{
  font-size: 24px;
}
</style>