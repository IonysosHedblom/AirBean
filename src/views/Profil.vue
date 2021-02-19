<template>
  <div class="user">
    <BurgerMenu />
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>
      Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
    </p>
    <form action="user-form" class="formstyle">
      <label for="submit">Namn</label>
      <input class="submit1" type="text" v-model="regData.name" placeholder="Type Your Name Here" />
      <label for="submit2">Epost</label>
      <input class="submit2" type="text" v-model="regData.email" placeholder="Type your mail address" />
      <input type="checkbox" />
      <button @click.prevent="regUser">GDPR Ok!</button>
    </form>
  </div>
</template>

<script>
import BurgerMenu from "../Components/BurgerMenu.vue";

export default {
  components: { BurgerMenu },
  data() {
    return {
      regData: {
        name: "",
        email: "",
      },
    };
  },

  methods: {
    regUser() {
      this.$store.dispatch("regUser", this.regData);
    },
  },
};
</script>

<style>

.user{
background-color:#F3E4E1;
}

.formstyle{
  background-color:#F3E4E1;

}
.user-form{
   display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 0 1rem;
}

</style>