FROM node
WORKDIR /home/debian/test/server
CMD ["sh","-c"," npm install thread-sleep  && npm install  && node index.js"]