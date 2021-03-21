<template>
  <div class="square">
    <p>・</p>
    <img src="/img/gatsby_portfolio.png" alt="portfolio">
    <button class="btn btn-border" v-on:click="show=true">Gatsby Portfolio</button>
    <Modal2 @closeModal="show=false" v-if="show" />
  </div>
</template>

<script>
import Modal2 from '~/components/Modal2.vue'

export default {
  components: {
    Modal2
 },
  data () {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>