<template>
  <div class="square">
    <p>・</p>
    <img src="/img/worried_sheep1.png" alt="worried sheep">
    <button class="btn btn-border" v-on:click="show=true">Worried Sheep</button>
    <Modal3 @closeModal="show=false" v-if="show"/>
  </div>
</template>

<script>

import Modal3 from '~/components/Modal3.vue'

export default {
  components: {
    Modal3
  },
  data(){
    return{
      show: false
    }
  },

}
</script>