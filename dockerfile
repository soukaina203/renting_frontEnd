FROM node:18.20.0-alpine3.19 AS build-env  
WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps 

COPY public public
COPY src src
COPY tailwind.config.js .

RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY ./ngx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-env /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
