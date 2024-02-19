document.addEventListener('keydown', function(event) {

  const response = await fetch('/src/assets/config.json');
  const data = await response.json();

  for (var i = 0; i < data.tiles.length; i++) {
    var keybind = data.tiles[i].keybind;
    if event.key == keybind {
      window.location.href = data.tiles[i].url;
    }
  }

);
