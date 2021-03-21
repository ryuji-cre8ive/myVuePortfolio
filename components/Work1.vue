<template>
  <div class="square">
    <p>・</p>
    <img src="/img/todo_master.png" alt="todo_master">
    <button class="btn btn-border" v-on:click="show=true">Todo master</button>
    <Modal1 @closeModal="show=false" v-if="show" />
  </div>
</template>

<script>
import Modal1 from '~/components/Modal1.vue'

export default {
  components: {
    Modal1
  },
  data(){
    return{
      show: false
    }
  }
}
</script>