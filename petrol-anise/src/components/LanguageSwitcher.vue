<template>
  <div>
    <span  @click="setLanguage('en')" style="margin-right: 4px; cursor: pointer">EN</span>/
    <span @click="setLanguage('fr')" style="margin-left: 4px; cursor: pointer">FR</span>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const { locale } = useI18n();

const setLanguage = (newLang) => {
  locale.value = newLang;
  localStorage.setItem('lang', newLang);
};

watchEffect(() => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    locale.value = storedLang;
  }
});
</script>
