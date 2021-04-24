<template>
<div class="indiv">
  <ul>
    <li v-for="article in post" :key="article._id">
      <div class="article-top">
        <div class="article-deco" :class="changeColor(article.category)"></div>
        <p>國分 竜二</p>
        <p>Ryuji Kokubu</p>
        <h2>{{article.title}}</h2>
        <h3>{{article.titleEng}}</h3>
        <h6>{{article.date}}</h6>
        <h4>#{{article.category}}</h4>
      </div>
      <div class="article-content">
        <h1>『 {{article.title}} 』</h1>
        <p>{{article.content}}</p>
      </div>
  </li>
  </ul>

  
  <div>
    <p id="suggestion">同じカテゴリの記事はこちら</p>
    <ul class="others">
    <li v-for="other in otherArticle" :key="other._id" >
      <nuxt-link :to="`/articles/${other._id}`">
        <div class="article-top">
        <div class="article-deco" :class="changeColor(other.category)"></div>
        <p>國分 竜二</p>
        <p>Ryuji Kokubu</p>
        <h2>{{other.title}}</h2>
        <h3>{{other.titleEng}}</h3>
        <h6>{{other.date}}</h6>
        <h4>#{{other.category}}</h4>
      </div>
      </nuxt-link>
      
    </li>
  </ul>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      post: {},
      id: this.$route.params.id,
      otherArticle: {},
    }
  },
  async fetch(){
    await axios.get('https://stormy-hollows-34938.herokuapp.com/data/' + this.id).then(res => this.post = res.data)
    await axios.get('https://stormy-hollows-34938.herokuapp.com/' + this.id).then(res => this.otherArticle = res.data)
  },
  mounted(){
    console.log(this.post);
  },
  // asyncData(){
    
  // },
  methods: {
    changeColor(data){
      if (data === "植物"){
        return "green"
      }
      if (data === "雑談"){
        return "orange"
      }
      if (data === "Tech") {
        return "blue"
      }
      return "red"
    }
  }
}
</script>

<style lang="scss">
  .blue{
    background: skyblue;
  }
  .green{
    background: green;
  }
  .red{
    background: red;
  }
  .orange{
    background: orange;
  }
</style>