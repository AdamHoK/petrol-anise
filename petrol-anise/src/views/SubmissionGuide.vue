<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const email = "pastichepublication@gmail.com"
</script>

<template>
  <div class="submissions-guide">
    <h1>{{ t('nav.submission_guide') }}</h1>
    <br>
    <ul>
      <li>{{ t('submissions.guidelines.one') }} {{email}}</li>
      <li>{{ t('submissions.guidelines.two') }}</li>
      <li>{{ t('submissions.guidelines.three') }}</li>
      <li>{{ t('submissions.guidelines.four') }}</li>
    </ul>
    <br>
    <br>
    <p>
      {{ t('submissions.if_selected') }}
    </p>
  </div>
</template>

<style>
  .submissions-guide ul {
    list-style: decimal;
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-align: left;
  }
</style>
