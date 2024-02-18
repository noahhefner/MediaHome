<script>
export default {
  props: {
    service: null,
    url: null,
    image: null,
    keybind: null
  }
}
</script>

<template>
  <div class="tile">
    <p>{{ service }}</p>
  </div>
</template>

<style scoped>

.tile {
  background-color: green;
}

</style>
