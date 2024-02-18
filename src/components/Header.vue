<script setup>
  import { getTodaysDate } from '../utils/date.js';
  import { getConfig } from '../utils/config.js';
  var todaysDate = getTodaysDate();
  console.log(getConfig());
</script>

<template>
  <div class='app-header'>
    <p>{{ todaysDate }}</p>
  </div>
</template>

<style scoped>
</style>
