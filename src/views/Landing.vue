<template>
  <div class="landing">
    <h1>Landing</h1>
    <button @click="test">test</button>
  </div>
</template>

<script>
import * as API from "@/api/mock.js";

export default {
  name: "Home",
  methods: {
    async test() {
      let result = await API.fetchProducts();
      console.log(result);
    },
  },
};
</script>

<style scoped>
.landing {
  background-color: #0e927d;
}
</style>