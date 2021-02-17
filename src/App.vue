<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Landing</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getMenu')
  }
 
}
</script>

<style>

</style>
