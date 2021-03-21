// Modal.vue 子コンポーネント
<template>
  <div class="modal">
    <div class="bg" @click="$emit('closeModal')">
      <div class="modal-wrap">
        <div class="content">
          
          <div class="text">
            <h1>Portfolio with Gatsby</h1>
            <p>Gatsby製のポートフォリオ。ちょっとReactを触りたくなった時に色々調べて辿り着いたのがこのGatsby.jsである。どうやらReactの中ではNext.jsと並ぶぐらい強いらしい。</p>
          </div>
          <button @click="$emit('closeModal')">
            <a class="btn btn-border" target="_blank" href="https://hungry-shaw-de6d95.netlify.app/">Link</a>
          </button>
        </div>
     <!-- このボタンを押すとカスタムイベントcloseModalが発生 -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  /*その他と主な共通部分は省略*/

  
</style>