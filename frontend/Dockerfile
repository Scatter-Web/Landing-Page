# Stage 1: build the app
FROM node:18-alpine AS builder
LABEL stage=builder
WORKDIR /app
# copy package manifest first for caching
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent
COPY . .
# Build the React app
RUN npm run build

# Stage 2: run a small Node static server (no nginx / reverse proxy)
FROM node:18-alpine AS runner
LABEL maintainer="you@example.com"
ARG APP_PORT=8080
ENV APP_PORT=${APP_PORT}
WORKDIR /app

# Install express for serving static files
RUN npm install --silent express

# copy the built app from builder
COPY --from=builder /app/build ./build

# copy the small server file
COPY --from=builder /app/server.js /app/server.js

EXPOSE ${APP_PORT}

# start the node static server
CMD ["node", "/app/server.js"]
