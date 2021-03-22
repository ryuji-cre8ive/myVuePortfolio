<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="{name: 'articles-id', params: { id: post.id }}"> {{post.content.title}}</nuxt-link>
      </li>
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
    axios.get('http://localhost:8080/data').then(res => this.posts = res.data)
  }
}
</script>