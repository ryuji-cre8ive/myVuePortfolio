// Modal.vue 子コンポーネント
<template>
  <div class="modal">
    <div class="bg" @click="$emit('closeModal')">
      <div class="modal-wrap">
        <div class="content">
          <div class="text">
            <h1>Randoom</h1>
            <p>
              現在地から半径500m圏内のカフェやレストランをランダムに決めてくれるWebApp。飲食店にはいきたいがなんでもいいという時に使ってほしい。
            </p>
          </div>
          <button @click="$emit('closeModal')">
            <a class="btn btn-border" target="_blank" href="https://random-food-338110.an.r.appspot.com">Link</a>
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