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
    }
  }
}
</script>

<template>
  <div class="tile">
    <a :href="url">
      <img :src="imagePath" :alt="service">
      <div class="keybind-container">
        <p>{{ keybind }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>

img {
  max-width: 100%;
  max-height: 100%;
}

.tile {
  position: relative;
  display: inline-block;
  background-color: green;
}

.keybind-container {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

.keybind-container p {
  margin: auto;
  color: black;
}

</style>
