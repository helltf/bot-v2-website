FROM node:16 AS build
ENV VITE_ENV = prod
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
