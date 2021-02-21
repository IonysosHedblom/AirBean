<template>
  <div class="order-status">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif:wght@700&family=Work+Sans&display=swap"
      rel="stylesheet"
    />

    <img class="drone" src="@/assets/drone.svg" alt="" />
    <h1>Din beställning är på väg!</h1>
    <h2><strong> 13</strong> minuter</h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.order-status {
  width: 375px;
  height: 667px;
  background-color: #e5674e;
  margin: 20px;
}
.drone {
  margin-left: 60px;
}
h1 {
  font-family: "PT Serif";
  font-style: Bold;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}
h2 {
  font-family: "Work Sans";
  font-size: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}
</style>
