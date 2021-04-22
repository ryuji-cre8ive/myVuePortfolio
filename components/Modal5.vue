// Modal.vue 子コンポーネント
<template>
  <div class="modal">
    <div class="bg" @click="$emit('closeModal')">
      <div class="modal-wrap">
        <div class="content">
          <div class="text">
            <h1>Smart Post for CCC</h1>
            <p>
              Code For Japanが主催するCivictech Challenge Cup2020の紹介サイトのフロントエンドを担当し制作した。初めてのオンラインでのチーム開発でもあったため、コミュニケーションに一苦労。だが、デザイナーのお墨付きをいただけた。
            </p>
          </div>
          <button @click="$emit('closeModal')">
            <a class="btn btn-border" target="_blank" href="https://smart-post.netlify.app/index.html">Link</a>
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