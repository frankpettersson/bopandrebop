<template lang="pug">
  #records
    section(v-if="errored")
      h2.error Unable to get records, please try again later...
    section(v-else)
      .loading(v-if="loading")
        img(src="https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif")
        h2 Loading...
      #all-records(v-else)
        .record(v-for="record in records")
          .record-thumbnail
            img(:src="record.fields.Omslagsbild[0].url")
          .record-standard
            .record-text
              p.record-artist {{ record.fields.Artist }}
              p.record-album {{ record.fields.Album }}
              p.record-genre {{ record.fields.Genrer }}
              p.record-info {{ record.fields.Info }}
              p.record-date {{ record.fields.Släpptes }}
              p.record-price {{ record.fields.Pris }}kr
        
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      records: null,
      loading: true,
      errored: false
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
      .then(response => (this.records = response.data.records))
      .catch(() => (this.errored = true))
      .finally(() => (this.loading = false))
  }
}
</script>

<style lang="scss">
.loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  h2 {
    line-height: 25px;
    font-size: 50px;
  }
  img {
    height: 100px;
    width: 100px;
  }
}
#all-records {
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  .record {
    padding: 15%;
    transition: all 0.3s;
    font-family: 'Roboto', sans-serif;
    &:first-child {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }
    .record-thumbnail {
      img {
        cursor: pointer;
        display: block;
        border: 1px solid black;
        width: calc(100% - 2px);
        &:after {
          content: '';
          display: block;
          padding-bottom: 200%;
        }
      }
    }
    .record-standard {
      .record-text {
        * {
          margin: 5px;
        }
        .record-artist {
          font-weight: 700;
          font-size: 1.5em;
        }
        .record-album {
          font-style: italic;
          font-size: 1.3em;
          margin-bottom: 20px;
        }
        .record-genrer {
          text-transform: uppercase;
          font-size: 0.7em;
          font-weight: bold;
        }
        .record-date {
          text-transform: uppercase;
          font-size: 0.8em;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .record-pris {
          font-weight: bold;
          text-decoration: underline;
        }
        .record-info {
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>
