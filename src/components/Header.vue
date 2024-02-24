<script>
  import { getTodaysDate } from '@/utils/date';

  const timezone = 'America/New_York';

  export default {
    data() {
      return {
        currentTime: '',
        todaysDate: ''
      };
    },
    mounted() {
      this.updateTime();
      this.timer = setInterval(this.updateTime, 1000);
      this.todaysDate = getTodaysDate();
    },
    methods: {
      updateTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString('en-US', { timeZone: timezone, hour: 'numeric', minute: 'numeric' });
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
  
</script>

<template>
  <div class='app-header'>
    <p>{{ this.currentTime }} | {{ this.todaysDate }}</p>
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
