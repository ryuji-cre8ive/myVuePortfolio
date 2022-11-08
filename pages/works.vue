<template>
  <div class="works">
    <div class="animationTarget work">
      <Work1 />
    </div>
    <div class="animationTarget">
      <Work2 />
    </div>
    <div class="animationTarget">
      <Work3 />
    </div>
    <div class="animationTarget">
      <Work4 />
    </div>
    <div class="animationTarget">
      <Work5 />
    </div>
    <div class="animationTarget">
      <Myyear />
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    
    setTimeout(() => {
      this.scrolling()
    }, 400);
  },
  methods:{
    scrolling() {
      const target = document.querySelectorAll('.animationTarget')
      document.addEventListener('scroll', () => {
        for (let index = 0; index < target.length; index++) {
          const getElementDistance = target[index].getBoundingClientRect().top + target[index].clientHeight * 0.6;
          if (window.innerHeight > getElementDistance) {
            target[index].classList.add('work')
          }
        }
      });
    }
  }
}

</script>