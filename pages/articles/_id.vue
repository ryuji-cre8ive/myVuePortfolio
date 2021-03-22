<template>
<div>
  <h1>記事個別ページ{{ post.id }}</h1>
  <h2>{{ post.title }}</h2>
  <p>{{ post.body}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  head(){
    return {
      title: this.post.title
    }
  },
  data(){
    return {
      post: {},
    }
  },
  mounted(){
    axios.get('http://localhost:8080/data/' + this.$route.params.id)
          .then(response => this.post = response.data);
  }
}
</script>