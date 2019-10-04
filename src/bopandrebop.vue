<template lang="pug">
  #bopandrebop
    #nav
      router-link(to="/") HOME
      router-link(to="/records") RECORDS
      router-link(to="/contact") CONTACT
    router-view
    #footer
</template>

<style lang="scss">
$navHeight: 200px;
$footerHeight: 400px;
body {
  margin: 0;
}
#bopandrebop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(219, 219, 219);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 8px;
    border-right: 2px solid black;
    &:last-child {
      border-right: none;
      padding: 0 0 0 8px;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#footer {
  height: 400px;
  background-color: #777777;
}
</style>
