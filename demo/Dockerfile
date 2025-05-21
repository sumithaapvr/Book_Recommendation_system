# Stage 1: Build React Application
FROM node:slim AS build

WORKDIR /app

# Copy env first (important for React build-time variables)
COPY .env .env

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build React app (will use REACT_APP_API_URL from .env)
RUN npm run build

# Stage 2: Serve React Application using Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
