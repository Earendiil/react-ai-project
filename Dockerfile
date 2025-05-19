# Dockerfile

# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the built files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
