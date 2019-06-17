FROM node
WORKDIR /src/test
CMD ["sh","-c"," npm install thread-sleep  && npm install  && node index"]