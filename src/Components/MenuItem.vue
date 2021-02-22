<template>
  <article>
    <button @click="addToOrder(menuItem)" class="addtoorder-btn">+</button>
    <p class="menu-item">{{ menuItem.title }}..........{{ menuItem.price }} {{ menuItem.currency }}</p>
    <p>{{ menuItem.desc }}</p>
  </article>
</template>

<script>
export default {
  props: {
    menuItem: Object,
  },
  methods: {
    addToOrder(menuItem) {
      this.$store.dispatch("addToOrder", menuItem);
    },
  },
};
</script>

<style>
.menu-item {
  font-family: "pT Serif";
  font-weight: 700;
  font-size: 23px;
  height: 46px;
}
.addtoorder-btn {
  width: 32px;
  height: 32px;
  background-color: #2f2926;
}
</style>
