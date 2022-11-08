<template>
  <div class="square">
    <p>・</p>
    <img src="../static/img/randoom.png" alt="Randoom" height="200">
    <button class="btn btn-border" v-on:click="show=true">Randoom</button>
    <Modal6 @closeModal="show=false" v-if="show"/>
  </div>
</template>

<script>

import Modal6 from '~/components/Modal6.vue'

export default {
  name: 'work5',
  components: {
    Modal6
  },
  data(){
    return{
      show: false
    }
  },

}
</script>