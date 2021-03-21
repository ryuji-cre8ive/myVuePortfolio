<template>
  <div class="square">
    <p>・</p>
    <iframe src="https://www.youtube.com/embed/F2VQKrVUjZw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button class="btn btn-border" v-on:click="show=true">My year 2020</button>
    <Modal4 @closeModal="show=false" v-if="show"/>
  </div>
</template>

<script>

import Modal4 from '~/components/Modal4.vue'
export default {
  components: {
    Modal4
  },
  data(){
    return{
      show: false
    }
  }
}
</script>