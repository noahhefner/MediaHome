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
    </a>
    <div class="keybind-container">
      <p>{{ keybind }}</p>
    </div>
  </div>
</template>

<style scoped>

.tile img {
  display: block;
  width: 100%;
}

.tile {
  border: 2px solid #a5a5a5;
  position: relative;
  border-radius: 12px;
  display: flex;
  height: 150px;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: green;
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
  border-radius: 12px;
  border: 2px solid #a5a5a5;
}

.keybind-container p {
  margin: auto;
  color: #a5a5a5;
}

</style>
