<template lang="pug">
  #info
    sectionTitle(titleName="INFO")
    .info-text-eng
      .intro Hello!
      .text I am a vinylcollector living in Gothenburg, Sweden.
      .text If you would like to purchase a vinyl just send an email with the name of the vinyl and your contact information to  
        a(href="mailto:tobias@bopandrebop.com") tobias@bopandrebop.com
</template>

<script>
import sectionTitle from '@/components/sectionTitle.vue'
export default {
  components: {
    sectionTitle
  }
}
</script>

<style lang="scss">
.info-text-swe,
.info-text-eng {
  width: 90%;
  margin: 30px auto;
  text-align: left;

  .intro {
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 20px;
  }

  .text {
    font-size: 1.2em;
  }
}
</style>
