<template>
  <div class="contact">
    <h1 class="get-in-touch">Get in touch with me</h1>
    <form @submit.prevent class="forms">
      <div>
        <div class="cp_iptxt">
          <label>name</label>
          <input type="text" placeholder="Yamada Takayuki" name="name" v-model="name" class="ef">
          <span class="focus_line"></span>
        </div>
        <div class="cp_iptxt">
          <label>e-mail</label>
          <input type="email" placeholder="xxx@ppp.co.jp" v-model="mail" class="ef">
          <span class="focus_line"></span>
        </div>
        <div class="cp_iptxt">
          <label>text</label>
          <input type="textbox" placeholder="message" v-model="text" class="ef">
          <span class="focus_line"></span>
        </div>

      </div>
      <div class="buttons">
        <button type="submit" v-on:click="submit">Send</button>
        <button type="submit" v-on:click="cancel">Cancel</button>
      </div>
    </form>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  
  data(){
    return{
      name: "",
      mail: "",
      text: ""
    }
  },
  mounted(){
    setTimeout(() => { this.textMovement() }, 400);
  },
  methods: {
    submit: async function () {
      let postName = this.name;
      let postMail = this.mail;
      let postText = this.text;
      if (postName && postMail && postText) {
        axios.post('/api/post', {
          name: postName,
          mail: postMail,
          text: postText
        });
        this.name = "";
        this.mail = "";
        this.text = "";
        alert('正常に送信されました。')
      } else return
    },
    cancel: function ()  {
      this.name = "";
      this.mail = "";
      this.text = "";
    },
    textMovement:() => {
      const textElement = document.querySelectorAll('.get-in-touch');
      for (let index = 0; index < textElement.length; index++) {
        const target = textElement[index];
        const texts = target.textContent;
        const textsArray = [];

        // target = 
      }
    }
  }
  // async asyncData(context) {
  //   const response = await context.$axios.get('http://localhost:3000/api', {
  //     name: this.name,
  //     mail: this.mail
  //   });
  //   return response;
}
</script>