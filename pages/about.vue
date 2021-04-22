<template>
  <div class="about">
    <div class="exp">
      <transition name="image" mode="out-in">
        <Img class="ryuji_photo"/>
      </transition>
      <Sentense />
    </div>

    <div class="skills">
      <h1>Skills</h1>
      <div class="skill">
        <Front class="skill-element"/>
        <Back class="skill-element"/>
        <Others class="skill-element"/>
      </div>
    </div>

    <div class="links">
      <h1>Links</h1>
      <div class="link">
        <a href="https://twitter.com/ryuji_vlog" target="_blank" class="icon twitter">
          <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        </a>
        <a href="https://github.com/ryuji-cre8ive" target="_blank" class="icon github">
          <font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon>
        </a>
        <a href="https://www.instagram.com/ryuji_vlog/" target="_blank" class="icon insta">
          <font-awesome-icon :icon="['fab', 'instagram']" ></font-awesome-icon>
        </a>
        <a href="https://open.spotify.com/playlist/1tPKkKutOhpA0JS5clrCfK" target="_blank" class="icon spotify">
          <font-awesome-icon :icon="['fab', 'spotify']" ></font-awesome-icon>
        </a>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    // window.addEventListener('scroll', this.scrolling())
    
    setTimeout(() => {
      this.scrolling()
    }, 400);
  },
  methods:{
    scrolling() {
      const target = document.querySelectorAll('.skill-element')
      document.addEventListener('scroll', () => {
        for (let index = 0; index < target.length; index++) {
          const getElementDistance = target[index].getBoundingClientRect().top + target[index].clientHeight * 0.6;
          if (window.innerHeight > getElementDistance) {
            target[index].classList.add('show')
          }
        }
      });
    }
  }
}
</script>