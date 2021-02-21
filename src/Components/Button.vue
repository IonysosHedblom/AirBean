<template>
  <div class="addcard">
    <a href="#" class="btn" @click="addCard">Brew me a cup</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
a.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 4rem;
  font-family: "PT Serif";
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: black;
  border: 0.125rem solid rgba(0,0,0,0.6);
  box-sizing: border-box;
  border-radius: 3.125rem;
  margin: 2rem 0;
  margin-left: 2.5rem;
 
}

a.btn:hover {
  background: #2f2926;
  color: #ddd;
}

a.btn:active {
  background: #000;
  color: #fff;
}
</style>
