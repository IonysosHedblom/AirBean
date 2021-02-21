<template>
  <div>
    <h1>Din beställning</h1>
    <br /><br />
    <CartItem />
    <button @click="makeOrder">Test</button>
  </div>
</template>

<script>
import CartItem from "../Components/CartItem.vue";

export default {
  components: { CartItem },
  methods: {
    makeOrder() {
      this.$store.dispatch("makeOrder");
    },
  },
};
</script>

<style></style>
