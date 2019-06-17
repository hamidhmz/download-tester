FROM node:8.10.0-alpine
COPY package.json /src/package.json
WORKDIR /src
RUN npm install