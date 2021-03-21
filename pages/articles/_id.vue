<template>
  <div>
    {{posts.content.title}}
  </div>
</template>

<script>
export default {
  asyncData($content, params){
    const articles = require('~/assets/articles')
    let article = ""
    articles.forEach(element => {
      if (element.id === params.id)
      article = element
    });
    return{
      posts: []
    }
  },
  mounted(){
    $axios.$get('~/assert/articles').then(res => this.posts = res.data)
  }
}
</script>