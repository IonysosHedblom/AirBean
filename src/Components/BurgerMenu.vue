<template>
  <div class="nav">
    <div class="burger-circle">
    <img class="burgericon" src="../assets/navicon.svg" alt="navigation" @click="gotoNav">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoNav() {
      return this.$router.push('/nav') //?
    }
  }

}
</script>

<style>

.nav{
  display: flex;
  height: 100px;
  background-image: url('../assets/graphics-header.svg');
}

.burger-circle{
  display: flex; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  margin-left: 5px;
  margin-top: 5px;
}

.burgericon{
  width: 65%;

}

</style>