<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Landing</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profil">Profil</router-link> |
      <router-link to="/status">Status</router-link> |
      <router-link to="/meny">Meny</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getMenu");
  },
};
</script>

<style>
* {
  margin: 0;
}
</style>
