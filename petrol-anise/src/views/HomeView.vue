<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const instagramLink = "https://www.instagram.com/pastiche.pastiche/"
const email = "pastichepublication@gmail.com"

</script>

<template>
  <main>
    <div class="about">
      <h1 style="font-style: italic;">{{ t('base.about') }}</h1>
      <br>
    <span style="white-space: pre-line; text-align: center">

      {{ t('base.main_text') }}
      {{ t('base.inquiries') }}<a :href=instagramLink>instagram</a>{{ t('base.orto') }} {{email}}
    </span>
  </div>

  </main>

</template>


