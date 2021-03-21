<template>
  <div class="works">
    
    <Work1 />
    <Work2 />
    <transition name="work3" mode="out-in">
      <Work3 />
    </transition>
    <Myyear />
  </div>
</template>