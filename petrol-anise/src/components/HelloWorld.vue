<script setup>
import {onMounted, watch} from "vue";
import { useRoute } from "vue-router"
import LogoSVG from '../assets/images/PasticheLogoTransparent.svg';
const route = useRoute()

defineProps({
  msg: {
    type: String,
    required: true
  }
})

function changeFont(){
  const FONT_CLASS_LISTS = ["dss-bigcaslon", "dss-garamondt", "dss-hedvig", "dss-credible"];
  const titleEl = document.querySelector('.title-scroll__element');

  let currFont = Array.from(titleEl.classList).find((key) => key.includes('dss'));

  titleEl.classList.remove(currFont)
  const newFontPos = (FONT_CLASS_LISTS.indexOf(currFont)+1)%FONT_CLASS_LISTS.length;
  titleEl.classList.add(FONT_CLASS_LISTS[newFontPos])
}

onMounted(() =>{
  watch(route, (to) => {
    console.log(to)
  }, {flush: 'pre', immediate: true, deep: true})
})

</script>

<template>
  <div class="title-scroll">
<!--    <img class="logo" :src =LogoSVG alt="">-->
    <span @click="changeFont" class="title-scroll__element dss-bigcaslon">{{ msg }}</span>
  </div>
</template>

<style scoped>

.logo {
  width: 5vw;
  margin-top: -1vw;
}

.title-scroll {
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title-scroll .title-scroll__element {
  text-transform: uppercase;
  font-weight: 500;
  font-size: clamp(36pt, 7vw, 144pt);
  position: relative;
  letter-spacing: 1pt;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>
