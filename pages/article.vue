<template>
  <div>
    <ul>
      <!-- <li v-for="article in articles" :key="article.id">
        <nuxt-link :to="{name: 'articles-id', params: { id: article.id }}"> {{article.content.title}}</nuxt-link>
      </li> -->
      <li v-for="post in posts" :key="post.id">{{post.content.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      posts: []
    }
  },
  mounted(){
    const res = axios.get('http://localhost:8080/data').then(res => this.posts = res.data)
    console.log(res)
  }
}
</script>