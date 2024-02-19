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
    this.$refs.tilesContainer.addEventListener('keydown', this.handleKeyPress);
    this.$refs.tilesContainer.focus();
  },
  methods: {
    async fetchConfig() {
      try {
        // Fetch config file
        const response = await fetch('/src/assets/config.json');
        const data = await response.json();
        this.tiles = data.tiles;
        // Set columns
        document.documentElement.style.setProperty('--columns', data.appearance.columns);
      } catch (error) {
        console.log(error);
      }
    },
    handleKeyPress(event) {
      // Setup keybindings from config file
      for (var i = 0; i < this.tiles.length; i++) {
         var keybind = this.tiles[i].keybind;
          if (event.key == keybind) {
            window.location.href = this.tiles[i].url;
          }
      }
    }
  }

};

</script>

<template>
  <div ref="tilesContainer" class='tiles-container' tabindex="0">
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

.tiles-container:focus {
  outline: none;
}

</style>
