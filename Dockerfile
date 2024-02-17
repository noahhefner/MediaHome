# Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Use Nginx as a lightweight web server for serving the Vue.js app
FROM nginx:alpine

# Copy the built Vue.js app from the 'build' stage to the Nginx server's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]

