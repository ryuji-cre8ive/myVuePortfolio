<template>
  <div class="square">
    <p>・</p>
    <img src="/img/smart-post.png" alt="Smart post">
    <button class="btn btn-border" v-on:click="show=true">Smart Post</button>
    <Modal5 @closeModal="show=false" v-if="show"/>
  </div>
</template>

<script>

import Modal5 from '~/components/Modal5.vue'

export default {
  components: {
    Modal5
  },
  data(){
    return{
      show: false
    }
  },

}
</script>