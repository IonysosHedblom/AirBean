<template>
  <div>
    <div class="navmenu" id="nav">
      <router-link to="/meny">Meny</router-link>
      <hr />
      <router-link to="/about">Vårt kaffe</router-link>
      <hr />
      <router-link to="/profil">Min profil</router-link>
      <hr />
      <router-link to="/status">Orderstatus</router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:ital@1&display=swap");

.navmenu {
  gap: 10px;
  width: 375px;
  height: 667px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  font-size: 35px;
  text-decoration: none;
  color: white;
  font-family: "PT Serif";
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: 0.4s;
}
a:hover {
  transform: scale(1.2);
}

hr {
}
</style>
