<template lang="pug">
  .vinyls
    img.loading(v-if="loading" src="../assets/loading.gif")
    p loading

    article(v-for="post in posts" :key="post.id")
      h2 {{ post.title }}
      div {{ post.content }}
</template>

<script>
const GetAirtableApi = () => import('@/services/api/airtable.js')
export default {
  name: 'GetAirtable',
  data() {
    return {
      loading: true,
      posts: []
    }
  },

  created() {
    GetAirtableApi.getPosts()
      .then(posts => {
        this.posts = posts
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss">
.vinyls {
  .loading {
    width: 30px;
  }
}
</style>
