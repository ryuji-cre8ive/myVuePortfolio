// Modal.vue 子コンポーネント
<template>
  <div class="modal">
    <div class="bg" @click="$emit('closeModal')">
      <div class="modal-wrap">
        <div class="content">
          <div class="text">
            <h1>Worried Sheep</h1>
            <p>
              Express製のお悩み相談WebApp。ルーティングやAPIの使用(これではZoomのAPIを使用)。フロントではgsapやjQueryを使用。ちょっとしたアニメーションの付与に役に立った。
              ホスティングにはGlitchというサービスを使用しているが、無料のため如何せん立ち上がりが遅い。一見するとお絵描きAppに見える可能性が微レ存。
            </p>
          </div>
          <button @click="$emit('closeModal')">
            <a class="btn btn-border" target="_blank" href="https://navy-necessary-guide.glitch.me/">Link</a>
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