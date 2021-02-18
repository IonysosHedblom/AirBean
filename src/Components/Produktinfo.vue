<template>
  <div class="produktinfo" v-if="show" @click="hideProduktinfo" >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
      possimus!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showProduktinfo() {
      this.show = true;
    },
    hideProduktinfo() {
      this.show = false;
    },
  },
};
</script>

<style>
.produktinfo {
  height: 200px;
  width: 150px;
  background-color: #f3e4e1;
}

.hide {
  display: none;
}
</style>