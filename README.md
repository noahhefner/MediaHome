# MediaHome

MediaHome is a self-hostable homepage for all your media services. MediaHome is not meant as a competitor to homelab dashboards like [Homer](https://github.com/bastienwirtz/homer) or [Homepage](https://github.com/gethomepage/homepage). Rather, it is meant to be accessed from a dedicated HTPC to provide a fast and simple way to access content.

![screenshot](./screenshot.png)

## Features

- Configurable with `json`
- Keyboard shortcuts to launch into services

## Roadmap

- [X] Dockerize the application with volume support for configuration files (done-ish, docker-compose is untested)
- [ ] Additional customization options (colors, toggle keyboard shortcut visibility, etc.)

## Development

Prerequisites:

- `node.js`
- `npm`
- `docker`

Makefile commands:

| Command | Description |
|---------|-------------|
| `make dev` | Build and run through node. Available at `localhost:5173` |
| `make build` | Build the Docker image. |
| `make run` | Run the Docker image. Available at `localhost:8080` |
| `make clean` | Delete `dist` directory and delete Docker image with `latest` tag |
| `make publish` | Publish image to Docker Hub |