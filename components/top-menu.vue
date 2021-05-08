<template>
  <div>
    <ul class="menu_">
      <li v-for="link in links" :key="link.url">
        <nuxt-link :to="link.url">{{link.text}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      links: [
        {url: "/", text: "Top"},
        {url: "/about", text: "About"},
        {url: "/works", text: "Works"},
        {url: "/contact", text: "Contact"},
        {url: "/article", text: "Article"}
      ]
    }
  }
}
</script>