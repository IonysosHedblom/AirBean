<template>
  <div class="menu">
     <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif:wght@700&family=Work+Sans&display=swap" rel="stylesheet">
    <BurgerMenu />
    <Order /><br><br>
    <h1>Meny</h1><br><br>
    <Produktinfo ref="produktinfoRef" />
    <ul>
      <li
        v-for="(menuItem, index) in menu"
        :key="index"
        @click="callingProduktinfo"
      >
        <MenuItem :menuItem="menuItem" />
      </li>
    </ul>
  </div>
</template>

<script>
import MenuItem from "../Components/MenuItem.vue";
import Produktinfo from "../Components/Produktinfo.vue";
import BurgerMenu from "../Components/BurgerMenu.vue";
import Order from "../Components/Order.vue";

export default {
  components: { MenuItem, Produktinfo, BurgerMenu, Order },
  computed: {
    menu() {
      return this.$store.getters.loadMenu;
    },
  },
  methods: {
    callingProduktinfo() {
      this.$refs.produktinfoRef.show = true;
    },
  },
};
</script>

<style>
.menu {
  background-color: #f3e4e1;
  height: 839px;
  width: 375px;
}
ul {
    list-style-type: none;
    
}
</style>
