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
        const response = await fetch('/config/config.json');
        const data = await response.json();
        this.tiles = data.tiles;
        // Set columns
        document.documentElement.style.setProperty('--columns', data.appearance.columns);
        console.log(Math.round(data.tiles.length / data.appearance.columns));
        document.documentElement.style.setProperty('--rows', Math.round(data.tiles.length / data.appearance.columns));
      } catch (error) {
        console.log(error);
      }
    },
    handleKeyPress(event) {
      // Setup keybindings from config file
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
        :target="tile.target"/>
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
