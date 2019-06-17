FROM node
COPY . /src
WORKDIR /src
EXPOSE 4040
CMD node index.js
