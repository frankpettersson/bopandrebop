<template lang="pug">
  #bopandrebop
    #logo
      a bopandrebop
    #nav
      router-link(to="/") HOME
      router-link(to="/records") RECORDS
      router-link(to="/contact") CONTACT
    divider
    router-view
    divider
</template>

<script>
import divider from '@/components/divider.vue'
export default {
  components: {
    divider
  }
}
</script>

<style lang="scss">
$nav-height: 200px;
$nav-link-width: 100px;
$nav-link-padding-width: 20px;
$nav-link-margin-width: 10px;
$nav-link-border-width: 2px;
body {
  margin: 0;
}
#bopandrebop {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 70%;
  margin: 0 auto;
}

#logo {
  a {
    width: ($nav-link-width * 3) + ($nav-link-margin-width * 4) +
      ($nav-link-padding-width * 6) + ($nav-link-border-width * 4);
    margin: 0.5em 0;
    padding: 30px 0;
    border: 2px solid black;
    display: inline-block;
    font-size: 3em;
    font-weight: bolder;
    text-decoration: none;
    color: black;

    &:hover {
      background-color: rgb(240, 240, 240);
    }
  }
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    width: $nav-link-width;
    margin: 0 $nav-link-margin-width;
    padding: 10px $nav-link-padding-width;
    display: block;
    font-weight: bold;
    color: #2c3e50;
    border: 2px solid black;
    text-decoration: none;

    &.router-link-exact-active {
      background-image: url('https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif');
      background-position: center center;
      background-size: 120px 120px;
      background-repeat: no-repeat;
      text-shadow: 1px 1px 5px #000000;
      color: white;
    }
  }
}
</style>
