<template>
  <section>
      <h1>ログイン状態</h1>
      <p>{{islogin}}</p>
      <div v-if="!islogin">
        <input type="text" name="name" v-model="name">
        <input type="text" name="passeord" v-model="password">
      </div>
      
      <button v-on:click="login" v-if="!islogin">ログイン</button>
      <button v-on:click="logout" v-if="islogin">ログアウト</button>

      <div class="edit" v-if="islogin">
        
        <nuxt-link to="/overview">記事管理画面へ</nuxt-link>
      </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  middleware: "loggedin",
  data(){
    return{
      name: "",
      password: "",
      info: false,
      title: "",
      titleEng: "",
      category: "",
      content: "",
    }
  },
  computed: {
    islogin(){
      return this.$store.state.islogin;
    }
  },
  methods: {
    login: async function() {
      let data = JSON.stringify({
        name: this.name,
        password: this.password
      });
      await axios.post('/api/check', data).then(res => {
        this.info = res.data;
      });

      if (this.info[0].name === this.name && this.info[0].password === this.password) {
        this.$store.commit('login')
      }
    },

    logout: function(){
      this.$store.commit('logout')
    }

    
  }
}
</script>