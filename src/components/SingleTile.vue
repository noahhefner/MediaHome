<script>

export default {
  props: {
    service: null,
    url: null,
    image: null,
    keybind: null
  },
  computed: {
    imagePath() {
      return `/src/assets/images/${this.image}`;
    },
    keybindUpper() {
      return this.keybind.toUpperCase();
    }
  }
}
</script>

<template>
  <a :href="url">
    <div class="tile">
      <img :src="imagePath" :alt="service">
      <div class="keybind-container">
        <p>{{ keybindUpper }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>

.tile img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.tile {
  border: 2px solid #a5a5a5;
  position: relative;
  border-radius: 12px;
  display: flex;
  height: 150px;
  width: 300px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.keybind-container {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 2px solid #a5a5a5;
}

.keybind-container p {
  margin: auto;
  color: #a5a5a5;
  font-family: Consolas, monospace;
}

</style>
