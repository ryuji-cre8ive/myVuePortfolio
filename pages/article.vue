<template>
  <div class="articles">
    <ul>
      <li v-for="post in posts" :key="post._id" class="article">
        <nuxt-link :to="`/articles/${post._id}`">
          <div class="image-scale" width="80%">
            <img :src="post.image" alt="img" width="80%" class="image">
          </div>
          
          <p>{{post.title}}</p>
          <h6>{{post.date}}</h6>
        </nuxt-link>
      </li>
    </ul>
        
  </div>
</template>

<script>
import axios from "axios"
export default {
  async asyncData(){
    
    return{
      posts: []
    }
  },
  async mounted(){
    setTimeout(() => {
      this.scrolling();
    }, 400)
    await axios.get('https://stormy-hollows-34938.herokuapp.com/data').then(res => this.posts = res.data)
    const photos = await axios.get(`https://pixabay.com/api/?key=16555952-bfac78937775f2c69b8b73d71&image_type=photo&category=business`).then(res => this.image = res.data.hits)
    for(let i = 0; i < this.posts.length; i++){
      this.posts[i].image = photos[i].webformatURL
    }
  },
  methods: {
    scrolling() {
      const target = document.querySelectorAll('.article')
      document.addEventListener('scroll', () => {
        for (let index = 0; index < target.length; index++) {
          const getElementDistance = target[index].getBoundingClientRect().top + target[index].clientHeight * 0.8;
          if (window.innerHeight > getElementDistance) {
            target[index].classList.add('show');
          }
        }
      });
    }
  }
}

</script>