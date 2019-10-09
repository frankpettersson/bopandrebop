<template lang="pug">
  #bopandrebop
    header
      #head
        a#logo(href="#head") bopandrebop
      nav
        router-link(to="/") RECORDS
        router-link(to="/contact") CONTACT
    divider
    main
      router-view
    divider
    footer

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
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

$nav-link-width: 150px;
$nav-link-padding-width: 20px;
$nav-link-margin-width: 10px;
$nav-link-border-width: 2px;

body {
  margin: 0;
}

#bopandrebop {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 1280px) {
    width: 70vw;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;

    #head {
      display: flex;
      flex-direction: row;
      justify-content: center;

      #logo {
        @media only screen and (max-width: 525px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 1) * 2) +
            (($nav-link-padding-width - 2) * 4) + ($nav-link-border-width * 2);
          font-size: 2.5em;
        }

        @media only screen and (max-width: 500px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 2) * 2) +
            (($nav-link-padding-width - 3) * 4) + ($nav-link-border-width * 2);
        }

        @media only screen and (max-width: 430px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 3) * 2) +
            (($nav-link-padding-width - 4) * 4) + ($nav-link-border-width * 2);
          font-size: 2.2em;
        }

        @media only screen and (max-width: 390px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 4) * 2) +
            (($nav-link-padding-width - 5) * 4) + ($nav-link-border-width * 2);
          font-size: 1.8em;
        }

        @media only screen and (max-width: 350px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 4) * 2) +
            (($nav-link-padding-width - 6) * 4) + ($nav-link-border-width * 2);
          font-size: 1.6em;
        }

        @media only screen and (max-width: 340px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 5) * 2) +
            (($nav-link-padding-width - 7) * 4) + ($nav-link-border-width * 2);
        }

        @media only screen and (max-width: 325px) {
          width: ($nav-link-width * 2) + (($nav-link-margin-width - 6) * 2) +
            (($nav-link-padding-width - 2) * 4) + ($nav-link-border-width * 2);
        }
        width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
          ($nav-link-padding-width * 4) + ($nav-link-border-width * 2);
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

    nav {
      display: flex;
      flex-direction: row;
      justify-content: center;

      a {
        @media only screen and (max-width: 525px) {
          font-size: 1em;
          margin: 0 9px;
          padding: 10px 18px;
        }

        @media only screen and (max-width: 500px) {
          font-size: 0.9em;
          margin: 0 8px;
          padding: 10px 17px;
        }

        @media only screen and (max-width: 430px) {
          margin: 0 7px;
          padding: 10px 16px;
        }

        @media only screen and (max-width: 390px) {
          margin: 0 6px;
          padding: 10px 15px;
        }

        @media only screen and (max-width: 350px) {
          margin: 0 6px;
          padding: 10px 14px;
        }

        @media only screen and (max-width: 340px) {
          margin: 0 5px;
          padding: 10px 13px;
        }

        @media only screen and (max-width: 325px) {
          margin: 0 4px;
          padding: 10px 12px;
        }

        width: $nav-link-width;
        margin: 0 $nav-link-margin-width;
        padding: 10px $nav-link-padding-width;
        display: block;
        font-weight: bold;
        color: #2c3e50;
        border: $nav-link-border-width solid black;
        text-decoration: none;

        &:hover {
          background-color: rgb(240, 240, 240);
        }

        &.router-link-exact-active {
          background-color: rgb(220, 220, 220);
        }
      }
    }
  }
}
</style>
