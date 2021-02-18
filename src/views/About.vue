<template>
  <div class="menu-wrapper">
    <BurgerMenu />
    <div class="about">
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital@1&display=swap"
        rel="stylesheet"
      />
      <h1>Vårt kaffe</h1>

      <div class="p-container">
        <h3>
          <strong>
            Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo
            half and half mazagran. Pumpkin spice.</strong
          >
        </h3>

        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.<br /><br />
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </div>

      <br />

      <section class="VD-Grundare">
        <img src="@/assets/eva-cortado.jpg" alt="" class="Eva-Img" />

        <h2>Eva Cortado</h2>

        <h6>VD & Grundare</h6>
      </section>

      <br />

      <img src="@/assets/graphics-footer.svg" alt="" />
    </div>
  </div>
</template>

<script>
import BurgerMenu from "../Components/BurgerMenu.vue";

export default {
  components: { BurgerMenu },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital@1&display=swap");

@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:ital@1&display=swap");

.menu-wrapper{
    background-color: #f3e4e1;
}

.about {
  background: #f3e4e1;
  height: 1061px;
  width: 375px;
}

.p-container {
  font-family: "Work Sans";

  font-weight: 600;

  font-size: 12px;

  line-height: 19.2px;

  max-width: 311px;

  display: block;

  margin-left: auto;

  margin-right: auto;

  text-align: left;

  letter-spacing: 0.02rem;

  color: #2f2926;
}
h1 {
  letter-spacing: 0.02rem;

  font-family: "PT Serif";

  font-weight: bold;

  font-size: 42px;

  line-height: 120%;
}

h2,
h6 {
  letter-spacing: 0.02rem;

  font-family: "PT Serif";

  font-weight: bold;

  line-height: 120%;
}

img.Eva-Img {
  border-radius: 50px;
}
</style>
