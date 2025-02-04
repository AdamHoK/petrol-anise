<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import {useI18n} from 'vue-i18n';

const {t} = useI18n();


</script>

<template>
  <header>
    <div class="wrapper">
    <HelloWorld msg="Pastiche" />
      <nav>
        <a href="https://www.zeffy.com/ticketing/pastiche-inaugural-event">{{ t('nav.event') }}</a>
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/guide">{{ t('nav.submission_guide') }}</RouterLink>
        <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
        <LanguageSwitcher></LanguageSwitcher>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

.logo-left-one {
  position: absolute;
  top: 20vw;
  left: 10vw;
  width: 15vw;
}

.logo-left-two {
  position: absolute;
  top: 35vw;
  left: 15vw;
  width: 15vw;
}

.logo-right-one {
  position: absolute;
  top: 20vw;
  right: 10vw;
  width: 15vw;
}

.logo-right-two {
  position: absolute;
  top: 35vw;
  right: 15vw;
  width: 15vw;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
}

nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

}
</style>
