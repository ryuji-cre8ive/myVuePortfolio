// Modal.vue 子コンポーネント
<template>
  <div class="modal">
    <div class="bg" @click="$emit('closeModal')">
      <div class="modal-wrap">
        <div class="content">
          <div class="text">
            <h1>My year 2020</h1>
            <p>
              完全趣味でやっているYouTubeの一年間のまとめ的な動画。この一年でどこに行ったかがこれを見ればほとんどわかる（そんなにたくさん行ってないwithコロナ）
            </p>
          </div>
        </div>
     <!-- このボタンを押すとカスタムイベントcloseModalが発生 -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  /*その他と主な共通部分は省略*/

  
</style>