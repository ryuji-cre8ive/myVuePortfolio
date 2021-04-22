// Modal.vue 子コンポーネント
<template>
  <div class="modal" @click="$emit('closeModal')">
    <div class="bg">
      <div class="modal-wrap">
        <div class="content">
          <div class="text">
            <h1>Todo Master</h1>
            <p>React製のTodoApp。最初にReactの学習に際し、重要な要素であるpropやstateを理解するために試しに作ってみた。なお使った技術は既に忘れてしまったなんて口が裂けても言えない。</p>
          </div>
          <button @click="$emit('closeModal')">
            <a class="btn btn-border" target="_blank" href="https://pedantic-yalow-86e6f2.netlify.app/">Link</a>
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