<template>
  <div class="data-base">
    <div class="container">
      <h3 class="teal-text text-lighten-2 center-align">Users Data Base</h3>
      <loading v-if="getLoading" />
      <ul class="collection" v-else>
        <li class="collection-item" v-for="key in getUsers" :key="key.id">{{key}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
export default {
  components: {
    Loading
  },
  mounted(){
    this.$store.dispatch('getUsers')
  },
  computed: {
    getUsers(){
      return this.$store.getters.getUsers
    },
    getLoading(){
      return this.$store.getters.getLoading
    },
  }
}
</script>