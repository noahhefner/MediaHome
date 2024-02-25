export async function loadConfig () {
  try {

    // Fetch config file
    const response = await fetch('/config/config.json');
    const data = await response.json();
    
    // Extract tile config
    const tiles = data.tiles;

    // Set columns and rows based on number of services configured
    document.documentElement.style.setProperty('--columns', data.appearance.columns);
    document.documentElement.style.setProperty('--rows', Math.round(data.tiles.length / data.appearance.columns));
  
    // Set color options
    document.documentElement.style.setProperty('--background-color', data.appearance.colors.backgroundColor);
    document.documentElement.style.setProperty('--text-color', data.appearance.colors.textColor);
    document.documentElement.style.setProperty('--border-color', data.appearance.colors.borderColor);
    document.documentElement.style.setProperty('--hover-color', data.appearance.colors.hoverColor);
    document.documentElement.style.setProperty('--keybind-color', data.appearance.colors.keybindColor);

    return tiles;

  } catch (error) {

    console.log(error);
  
  }
}
