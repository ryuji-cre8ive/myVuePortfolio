<template>
  <div class="articles">
    <ul>
      <li v-for="post, i in posts" :key="post._id" class="article">
        <nuxt-link :to="`/articles/${post._id}`">
          <div class="image-scale" width="80%">
            <img v-if="images[i]" :src="images[i].webformatURL" alt="img" width="80%" class="image">
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
  data(){
    return {
      posts: [],
      images: []
    }
  },
  async mounted(){
    setTimeout(() => {
      this.scrolling();
    }, 1000);
    await axios.get('/api/data').then(res => this.posts = res.data)
    await axios.get(`https://pixabay.com/api/?key=16555952-bfac78937775f2c69b8b73d71&image_type=photo&category=business`).then(res => this.images = res.data.hits)
  },
  methods: {
    scrolling() {
      const target = document.querySelectorAll('.article')
      if (target) {
        target[0].classList.add('show');
        target[1].classList.add('show');
        document.addEventListener('scroll', () => {
          for (let index = 0; index < target.length; index++) {
            const getElementDistance = target[index].getBoundingClientRect().top + target[index].clientHeight * 0.6;
            if (window.innerHeight > getElementDistance) {
              target[index].classList.add('show');
            }
          }
        });
      } else {
        return alert('エラーが発生しました')
      }
    }
  }
}

</script>

<style>
.show{
  opacity:1;
  transition: .3s;
  transform: none;
}
</style>