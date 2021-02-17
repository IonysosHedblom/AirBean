<template>
  <div class="menu">
      <h1>Meny</h1>
      <ul>
          <li v-for="(menuItem, index) in menu" :key="index">
              <MenuItem :menuItem="menuItem"/>
          </li>
      </ul>
    
  </div>
</template>

<script>
import MenuItem from "../Components/MenuItem.vue";

export default {
  components: { MenuItem },
  computed: {
    menu() {
      return this.$store.getters.loadMenu;
    },
  },
  
};
</script>

<style>
.menu {
  background-color: #f3e4e1;
}
</style>