FROM node:22-alpine as build-stage

RUN apk add --no-cache curl ca-certificates nodejs npm \
    && npm install -g pnpm \
    && pnpm --version

WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY ./ .
RUN pnpm build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
