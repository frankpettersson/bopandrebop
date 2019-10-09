<template lang="pug">
  #records
    sectionTitle(titleName="RECORDS")
    section(v-if="errored")
      h2.error Unable to get records, please try again later...
    section(v-else)
      .loading(v-if="loading")
        img(src="@/assets/record.webm")
        h2 Loading...
      .record-grid(v-else)
        .record(v-for="record in records")
          .record-thumbnail
            img(:src="record.fields.Omslagsbild[0].url")
          .record-text
            .record-text-section
              .record-artist {{ record.fields.Artist }}
              .record-album {{ record.fields.Album }}
            .record-genres
              .record-genre(v-for="genre in record.fields.Genrer") {{ genre }}
            .record-info(v-if="record.fields.Info.length<90") {{ record.fields.Info }}
            .record-info(v-else) {{ record.fields.Info.substring(0,90)+"..." }}
            .record-text-section
              .record-date {{ record.fields.Släpptes }}
              .record-price {{ record.fields.Pris }}kr
</template>

<script>
import Axios from 'axios'
import divider from '@/components/divider.vue'
import sectionTitle from '@/components/title.vue'
export default {
  components: {
    divider,
    sectionTitle
  },
  name: 'records',
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
#records {
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
  .record-grid {
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

    .record {
      padding: 15%;
      transition: all 0.3s;

      &:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }
      .record-thumbnail {
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
      .record-text {
        border-top: none;
        .record-text-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px;
          .record-artist {
            padding-bottom: 2px;
            font-weight: 700;
            font-size: 1.5em;
          }
          .record-album {
            padding-top: 2px;
            font-style: italic;
            font-size: 1.3em;
          }
          .record-date {
            padding-bottom: 2px;
            font-weight: 700;
            font-size: 0.8em;
          }
          .record-price {
            padding-top: 2px;
            font-weight: 700;
            text-decoration: underline;
          }
        }
        .record-genres {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 5px;
          .record-genre {
            border: 1px solid black;
            border-radius: 4px;
            margin: 2px;
            padding: 3px;
            font-weight: 700;
            font-size: 0.8em;
          }
        }
        .record-info {
          padding: 5px;
          font-size: 0.9em;
        }
      }
    }
  }
}
</style>
