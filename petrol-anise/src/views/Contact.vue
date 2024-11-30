<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const email = "pastichepublication@gmail.com";
const instagram = "@pastiche.pastiche";
const phoneNumber = "(438)-7PA-STIJ";

</script>

<template>
  <div class="contact">
    <h1>{{ t('nav.contact') }}</h1>
    <br>
    <ul>
      <li>{{t('contact.email')}} - {{ email }}</li>
      <li>{{t('contact.instagram')}} - <a :href="t('contact.instagram_link')" >{{ instagram }}</a></li>
      <li>{{t('contact.phone')}} - {{ phoneNumber }}</li>
    </ul>
  </div>
</template>

<style>
.contact ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: left;
}
</style>
