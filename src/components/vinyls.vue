<template lang="pug">
  .vinyls
    sectionTitle(titleName="VINYLS FOR SALE")
    section(v-if="errored")
      h2.error Unable to get vinyls, please try again later...
    section(v-else)
      .loading(v-if="loading")
        h2 Loading...
      .vinyl-grid(v-else)
        .vinyl(v-for="vinyl in vinyls" v-if="!vinyl.fields.Såld")
          .vinyl-thumbnail
            img(:src="vinyl.fields.Omslagsbild[0].url" :alt="vinyl.fields.Album")
          .vinyl-text
            .vinyl-text-section
              .vinyl-artist {{ vinyl.fields.Artist }}
              .vinyl-album {{ vinyl.fields.Album }}
            .vinyl-genres
              .vinyl-genre(v-for="genre in vinyl.fields.Genrer") {{ genre }}
            .vinyl-info(v-if="vinyl.fields.Info.length<90")
              p {{ vinyl.fields.Info }}
            .vinyl-info(v-else) 
              p(style="display: none") {{ vinyl.fields.Info }}
              p(style="display: inline") {{ vinyl.fields.Info.substring(0,90) }}
              a(@click="toggleShow" aria-label="view whole text") ...show more
            .vinyl-text-section
              .vinyl-date {{ vinyl.fields.Släpptes }}
              .vinyl-price {{ vinyl.fields.Pris }}kr
</template>

<script>
import Axios from 'axios'
import divider from '@/components/divider.vue'
import sectionTitle from '@/components/sectionTitle.vue'
export default {
  components: {
    divider,
    sectionTitle
  },
  name: 'vinyls',
  data() {
    return {
      vinyls: null,
      loading: true,
      errored: false,
      textToggle: false
    }
  },
  methods: {
    toggleShow(event) {
      if (this.textToggle === false) {
        event.target.textContent = '...show less'
        event.target.previousElementSibling.style.display = 'none'
        event.target.previousElementSibling.previousElementSibling.style.display =
          'inline'
        this.textToggle = true
      } else {
        event.target.textContent = '...show more'
        event.target.previousElementSibling.style.display = 'inline'
        event.target.previousElementSibling.previousElementSibling.style.display =
          'none'
        this.textToggle = false
      }
    }
  },
  mounted() {
    Axios.request({
      url: '/Vinyler?view=Grid%20view',
      method: 'get',
      baseURL: 'https://api.airtable.com/v0/app4vExvItGN8PhEX',
      headers: {
        Authorization: 'Bearer key3qyDzMZuJEmTvR'
      }
    })
      .then(response => (this.vinyls = response.data.records))
      .catch(() => (this.errored = true))
      .finally(() => (this.loading = false))
  }
}
</script>

<style lang="scss">
.vinyls {
  h1 {
    text-align: left;
    margin: 0 auto;
    width: 90%;
  }
  .divider {
    margin-top: 0;
  }

  .loading {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    h2 {
      line-height: 50px;
      font-size: 30px;
    }
    img {
      height: 100px;
      width: 100px;
    }
  }
  .vinyl-grid {
    @media only screen and (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }

    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-auto-rows: 1fr;
    grid-auto-flow: row;

    &::before {
      content: '';
      width: 0;
      padding-bottom: 100%;
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    .vinyl {
      padding: 15%;
      transition: all 0.3s;

      &:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }
      .vinyl-thumbnail {
        img {
          cursor: pointer;
          display: block;
          border: 2px solid black;
          width: calc(100% - 4px);
          &:after {
            content: '';
            display: block;
            padding-bottom: 200%;
          }
        }
      }
      .vinyl-text {
        border-top: none;
        .vinyl-text-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px;
          .vinyl-artist {
            padding-bottom: 2px;
            font-weight: 700;
            font-size: 1.5em;
          }
          .vinyl-album {
            padding-top: 2px;
            font-style: italic;
            font-size: 1.3em;
          }
          .vinyl-date {
            padding-bottom: 2px;
            font-weight: 700;
            font-size: 0.8em;
          }
          .vinyl-price {
            padding-top: 2px;
            font-weight: 700;
            text-decoration: underline;
          }
        }
        .vinyl-genres {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 5px;
          .vinyl-genre {
            border: 1px solid black;
            border-radius: 4px;
            margin: 2px;
            padding: 3px;
            font-weight: 700;
            font-size: 0.8em;
          }
        }
        .vinyl-info {
          padding: 5px;
          font-size: 0.9em;
          p {
            display: inline;
          }
          a {
            color: blue;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
