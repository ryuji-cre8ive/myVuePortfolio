<template>
  <div>
        <input type="text" v-model="newTitle">
        <input type="text" v-model="newContent">
        <button v-on:click="updateArticle">store</button>
        <p>{{newTitle}}</p>
        <p>{{newContent}}</p>
        <nuxt-link to="/overview">管理画面に戻る</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  middleware: "auth",
  data(){
    return{
      article: [],
      id: this.$route.params.id,
      newTitle: "",
      newContent: ""
    }
  },
  mounted(){
    axios.get('/api/data/' + this.id).then(res => {
      this.article = res.data[0];
      this.newTitle = res.data[0].title;
      this.newContent = res.data[0].content
    })
  },

  methods: {
    updateArticle(){
      let data = {
        _id: this.id,
        title: this.newTitle,
        content: this.newContent
      }
      axios.post('/api/update', data);
      alert('Your action is success');
    }
  }
}
</script>