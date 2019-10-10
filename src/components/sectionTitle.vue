<template lang="pug">
  h1.title {{ titleName }}
</template>

<script>
export default {
  name: 'sectionTitle',
  props: {
    titleName: String
  }
}
</script>

<style lang="scss">
.title {
  text-align: left;
  border-bottom: 5px solid black;
  margin: 0 auto;
  width: 90%;
}
</style>
