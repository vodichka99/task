<template>
  <div class="home">
    <router-link :to="{name: 'registration'}">Sign Up</router-link>
    <router-link :to="{name: 'login'}">Sign In</router-link>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
};
</script>
