<template>
  <div class="user">
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>
      Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
    </p>
    <form action="user-form">
      <label for="submit">Namn</label>
      <input class="submit1" type="text" v-model="regData.name"/>
      <label for="submit2">Epost</label>
      <input class="submit2" type="text" v-model="regData.email" />
      <input type="checkbox" />
      <button @click.prevent="regUser">GDPR Ok!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regData: {
        name: '',
        email: ''
      }
    }
    
  },

  methods: {
    regUser() {
      this.$store.dispatch("regUser", this.regData);
    },
  },
};
</script>

<style>
</style>