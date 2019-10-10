<template lang="pug">
  #bopandrebop
    header
      nav
        #head
          a#logo(href="/" aria-label="logo") bopandrebop
        .links
          router-link(to="/") VINYLS
          router-link(to="/info") INFO
    divider
    main
      router-view
    divider
    footer
      .social-media
        a(href="https://www.instagram.com/bop_and_rebop/" target="_blank" rel="noopener" aria-label="go to instagram page") 
          img(src="@/assets/instagram.png" alt="instagram")
      .contact
        .name Tobias Magnusson
        .e-mail tobias@bopandrebop.com
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
$nav-link-margin-width: 5px;
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

    nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;

      #head {
        @media only screen and (max-width: 525px) {
          width: 100%;
        }
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        #logo {
          @media only screen and (max-width: 525px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 2) * 4) + ($nav-link-border-width * 2);
            font-size: 2.5em;
          }

          @media only screen and (max-width: 500px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 3) * 4) + ($nav-link-border-width * 2);
          }

          @media only screen and (max-width: 430px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 4) * 4) + ($nav-link-border-width * 2);
            font-size: 2.2em;
          }

          @media only screen and (max-width: 390px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 5) * 4) + ($nav-link-border-width * 2);
            font-size: 1.8em;
          }

          @media only screen and (max-width: 350px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 6) * 4) + ($nav-link-border-width * 2);
            font-size: 1.6em;
          }

          @media only screen and (max-width: 340px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 7) * 4) + ($nav-link-border-width * 2);
          }

          @media only screen and (max-width: 325px) {
            width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
              (($nav-link-padding-width - 8) * 4) + ($nav-link-border-width * 2);
          }
          width: ($nav-link-width * 2) + ($nav-link-margin-width * 2) +
            ($nav-link-padding-width * 4) + ($nav-link-border-width * 2);
          padding: 10px 0;
          border: 2px solid black;
          display: inline-block;
          font-size: 2em;
          font-weight: bolder;
          text-decoration: none;
          color: black;
          margin: 0 5px;

          &:hover {
            background-color: rgb(240, 240, 240);
          }
        }
      }

      .links {
        @media only screen and (max-width: 525px) {
          width: 100%;
        }
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        a {
          @media only screen and (max-width: 525px) {
            font-size: 1em;
            padding: 10px ($nav-link-padding-width - 2);
          }

          @media only screen and (max-width: 500px) {
            font-size: 0.9em;
            padding: 10px ($nav-link-padding-width - 3);
          }

          @media only screen and (max-width: 430px) {
            padding: 10px ($nav-link-padding-width - 4);
          }

          @media only screen and (max-width: 390px) {
            padding: 10px ($nav-link-padding-width - 5);
          }

          @media only screen and (max-width: 350px) {
            padding: 10px ($nav-link-padding-width - 6);
          }

          @media only screen and (max-width: 340px) {
            padding: 10px ($nav-link-padding-width - 7);
          }

          @media only screen and (max-width: 325px) {
            padding: 10px ($nav-link-padding-width - 8);
          }

          width: $nav-link-width;
          margin: 10px $nav-link-margin-width;
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
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .social-media {
      margin-right: 20px;
      a {
        img {
          max-height: 80px;
        }
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }
  }
}
</style>
