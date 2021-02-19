<template>
  <div class="landing" @click="gotoNav">
    <img src="@/assets/intro-graphic-left.svg" alt="" />

    <img src="@/assets/airbean-landing.svg" alt="" class="logo" />
    
    <img class="img-right" src="@/assets/intro-graphic-right.svg" alt="" />
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
    gotoNav() {
      return this.$router.push('/nav') //?
    }
  },
};
</script>



<style>


.landing {
  display: flex;
  width: 375px;
  height: 667px;
  background: #0e927d;
  justify-content: space-between;
}

img.logo {
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  /* align-self: center; */
  
}

</style>
