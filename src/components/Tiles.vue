<script>

import SingleTile from '@/components/SingleTile.vue';
import { loadConfig } from '@/utils/config'; 

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
    // Foxus the tiles container so that keypresses will be caught
    this.$refs.tilesContainer.focus();
  },
  methods: {
    async fetchConfig() {
      // Load color values as css variables and get tile configuration
      this.tiles = await loadConfig();
      console.log(this.tiles);
    },
    handleKeyPress(event) {
      // Listen for hotkeys from config file
      for (var i = 0; i < this.tiles.length; i++) {
         var keybind = this.tiles[i].keybind;
          if (event.key == keybind) {
            window.open(this.tiles[i].url, this.tiles[i].target);
          }
      }
    }
  }

};

</script>

<template>
  <div ref="tilesContainer" class='tiles-container' tabindex="0">
    <div class="tile-wrapper-outer" v-for="(tile, index) in tiles">
      <SingleTile 
        :service="tile.service" 
        :url="tile.url" 
        :image="tile.image" 
        :keybind="tile.keybind"
        :target="tile.target"
        :keybindHidden="tile.keybindHidden"/>
    </div>
  </div>
</template>

<style scoped>

.tiles-container {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  margin: 0;
  padding: 2rem;
}

.tiles-container:focus {
  outline: none;
}

.tile-wrapper-outer {
  padding: 0;
  margin: 0;
  border: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}

</style>
