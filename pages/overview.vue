<template>
<div class="overview">
  <h1>記事管理ページです。</h1>

  <div class="edit-table">
    <table>
      <tr>
        <th class="">記事のタイトル</th>
        <th>製作日付</th>
        <th>削除ボタン</th>
        <th>編集ボタン</th>
      </tr>
      <tr v-for="article in articles" :key="article.id">
        <td>{{article.title}}</td>
        <td>{{article.date}}</td>
        <td>
          <button v-on:click="deleteArticle(article.id)">削除</button>
        </td>
        <td>
          <nuxt-link :to="`/edit/${article.id}`">編集</nuxt-link>
        </td>
        
      </tr>
    </table>
  </div>

  <div class="write-new-article">
    <h1>新しい記事を書く</h1>
    <input type="text" name="title" placeholder="title" v-model="title">
    <input type="text" name="titleEng" placeholder="titleEng" v-model="titleEng">
    <input type="text" name="category" placeholder="category" title="category" v-model="category">
    <textarea name="content" cols="30" rows="10" placeholder="write whatever you want" v-model="content"></textarea>
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
    await axios.get('/api/newpost').then(res => this.articles = res.data)
    
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
      axios.post('/api/create', data).then(res => console.log(res));
      this.title = "";
      this.titleEng = "";
      this.category = "";
      this.content = "";
      axios.get('/api/newpost').then(res => this.articles = res.data);
    },
    deleteArticle(id){
      let data = {
        id: id
      };

      let alert = confirm('are you sure to delete this article?');

      if (alert) {
        axios.post('/api/delete', data).then(res => console.log(res));
        this.$nextTick(() => {
        console.log('deleted!');
        axios.get('/api/newpost').then(res => this.articles = res.data)
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