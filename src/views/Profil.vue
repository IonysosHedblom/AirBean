<template>
  <div class="user">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif:wght@700&family=Work+Sans&display=swap" rel="stylesheet">
    <BurgerMenu />
    <section class="form-container">
      <h1>Välkommen till AirBean-familjen!</h1>
      <br />
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <br />
      <form action="user-form" class="formstyle">
        <label for="submit">Namn</label>
        <input
          class="submit1"
          type="text"
          v-model="regData.name"
          placeholder="ex:kaffeholic Developers..."
        />
        <br />
        <label for="submit2">Epost</label>
        <input
          class="submit2"
          type="text"
          v-model="regData.email"
          placeholder="kaffeholic.developers@gmail.com"
        />
        <div class="radio-btn">
          <input type="radio" @click.prevent="regUser" checked />
          <label for="GDPR">GDPR Ok!</label>
        </div>

        <!-- <button @click.prevent="regUser">GDPR Ok!</button> -->
        <AddCard />
      </form>
    </section>
  </div>
</template>

<script>
import BurgerMenu from "../Components/BurgerMenu.vue";
import AddCard from "../Components/Button.vue";
export default {
  components: { BurgerMenu, AddCard },
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:ital@1&display=swap");
.user {
  background-color: #2f2926;
  width: 375px;
  height: 667px;
}
.form-container {
  background-color: #f3e4e1;
  width: 341px;
  height: 565.77px;
  margin-left: 17px;
}
label {
  font-family: "Work Sans";
  font-size: 12px;
}
input {
  border-radius: 3px;
  font-family: "Work Sans";
  font-size: 16px;
  width: 310px;
  height: 48px;
  border-radius: 10px;
  margin-left: 13px;
  border: 0.125rem solid rgba(0, 0, 0, 0.6);
}
p {
  font-family: "Work Sans";
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  text-align: center;
}
.formstyle {
  background-color: #f3e4e1;
}
.user-form {
  display: grid;

  /* grid-template-columns: 1fr 1fr; */

  gap: 0 1rem;
}
h1 {
  font-family: "PT Serif";
  font-size: 32px;
  text-align: center;
}
.radio-btn {
  margin: 0.4rem;
}
input[type="radio"] {
  display: none;
}

input[type="radio"] + label:before {
  content: "";
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 12px;
  height: 12px;
  padding: 3px;
  margin-right: 3px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #000;
  background-color: #0e927d;
  border-radius: 50%;
}
label {
  display: flex;
  align-items: center;
}

input[type="radio"]:checked + label:before {
  background-color: #0e927d;
}
</style>
