<template lang="pug">
  .contact
    sectionTitle(titleName="CONTACT")
    .info-text
      .hej Hej!
      .info Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam veritatis nobis voluptates saepe optio placeat neque, accusantium quo quidem vel quia magni iste nam qui hic possimus veniam? Voluptatibus.
      .tobias Tobias Magnusson
      .mobil 070 000 00 00
      .epost epost@epost.se
</template>

<script>
import sectionTitle from '@/components/title.vue'
export default {
  components: {
    sectionTitle
  }
}
</script>

<style lang="scss">
.info-text {
  @media only screen and (min-width: 1280px) {
    width: 50%;
  }

  width: 90vw;
  margin: 30px auto;

  .info,
  .tobias,
  .mobil,
  .epost {
    margin: 30px 0;
  }

  .hej {
    font-weight: bold;
    font-size: 3em;
    font-style: italic;
  }

  .tobias {
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: underline;
  }

  .mobil {
    font-style: italic;
    font-size: 1.3em;
    margin-bottom: 0;
  }

  .epost {
    font-style: italic;
    font-size: 1.3em;
    margin: 0;
  }
}
</style>
