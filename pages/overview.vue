<template>
<div>
  <h1>記事管理ページです。</h1>

  <div>
    <table>
      <tr>
        <th>記事のタイトル</th>
        <th>削除ボタン</th>
        <th>編集ボタン</th>
      </tr>
      <tr v-for="article in articles" :key="article._id">
        <td >{{article.title}}</td>
        <td>
          <button v-on:click="deleteArticle(article._id)">削除</button>
          <nuxt-link :to="`/edit/${article._id}`">編集</nuxt-link>
        </td>
      </tr>
    </table>
  </div>

  <div>
    <input type="text" name="title" placeholder="title" v-model="title">
    <input type="text" name="titleEng" placeholder="titleEng" v-model="titleEng">
    <input type="text" name="category" placeholder="category" title="category" v-model="category">
    <input type="text" name="content" placeholder="content" v-model="content"> 
    <button v-on:click="createArticle">Create</button>
  </div>
</div>
  
</template>

<script>

import axios from 'axios';
export default {
  middleware: "auth",
  data(){
    return{
      articles:[],
      title: "",
      titleEng: "",
      category: "",
      content: ""
    }
  },

  async mounted(){
    setInterval(async() => {
      await axios.get('/api/data').then(res => this.articles = res.data)
    }, 300);
    
  },
  computed: {
    islogin(){
      return this.$store.state.islogin;
    }
  },

  methods: {
    createArticle() {
      let data = {
        title: this.title,
        titleEng: this.titleEng,
        category: this.category,
        content: this.content
      };
      axios.post('/api/data', data).then(res => console.log(res));
      this.title = "";
      this.titleEng = "";
      this.category = "";
      this.content = "";
    },
    deleteArticle(id){
      let data = {
        _id: id
      };

      let alert = confirm('are you sure to delete this article?');

      if (alert) {
        axios.post('/api/delete', data).then(res => console.log(res));
        this.$nextTick(() => {
        console.log('deleted!');
      });
      } else {
        return
      }
      
    },
    editArticle(id){
      let data = {
        _id: id
      };

    }
  }
}
</script>