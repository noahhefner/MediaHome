<script setup>
  import { getTodaysDate } from '../utils/date.js';
  var todaysDate = getTodaysDate();
</script>

<template>
  <div class='app-header'>
    <p>{{ todaysDate }}</p>
  </div>
</template>

<style scoped>
</style>
