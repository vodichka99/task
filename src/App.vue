<template>
  
  <router-view />
</template>
<script>
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
export default {
  mounted() {
    M.AutoInit();
  },
};
</script>
<style lang="scss">
// h3{
  // margin-bottom: 50px;
// }
</style>