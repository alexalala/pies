<template>
  <div id="app">
    <img src="./assets/pie.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import "./assets/style.scss";
</style>
