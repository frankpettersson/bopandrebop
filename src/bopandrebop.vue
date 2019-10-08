<template lang="pug">
  #bopandrebop
    #logo
      a bopandrebop
    #nav
      router-link(to="/") HOME
      router-link(to="/records") RECORDS
      router-link(to="/contact") CONTACT
    router-view
</template>

<style lang="scss">
$navHeight: 200px;
$footerHeight: 400px;
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
    border: 2px solid black;
    padding: 30px 60px;
    display: inline-block;
    font-size: 3em;
    font-weight: bolder;
    text-decoration: none;
    color: black;
    margin: 0.5em 0;

    &:hover {
      background-color: rgb(240, 240, 240);
    }
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 8px;
    border: 2px solid black;
    padding: 10px 20px;
    margin: 0 10px;
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
