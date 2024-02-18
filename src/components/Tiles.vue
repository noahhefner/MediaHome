<script>

import SingleTile from '@/components/SingleTile.vue';

export default {
  data() {
    return {
      tiles: null
    };
  },
  components: {
    SingleTile
  },
  mounted() {
    this.fetchConfig();
  },
  methods: {
    async fetchConfig() {
      try {
        const response = await fetch('/src/assets/config.json');
        const data = await response.json();
        this.tiles = data.tiles;
        document.documentElement.style.setProperty('--columns', data.appearance.columns);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<template>
  <div class='tiles-container'>
    <SingleTile 
      v-for="(tile, index) in tiles" 
      :service="tile.service" 
      :url="tile.url" 
      :image="tile.image" 
      :keybind="tile.keybind"
    />
  </div>
</template>

<style scoped>

.tiles-container {
  display: grid;
  height: 500px;
  background-color: red;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: 25% 25% 25% 25%;
}

</style>
