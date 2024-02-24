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
.app-header {
  text-align: center;
  max-width: 100%;
  padding: 2rem;
  font-size: 2rem;
  p {
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-family: Consolas, monospace;
  }
}
</style>
