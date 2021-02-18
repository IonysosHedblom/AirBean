<template>
  <div class="menu">
    <BurgerMenu />
    <h1>Meny</h1>
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
import BurgerMenu from "../Components/BurgerMenu.vue"

export default {
  components: { MenuItem, Produktinfo, BurgerMenu },
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
}
</style>