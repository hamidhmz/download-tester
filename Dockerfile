FROM node
WORKDIR /home/debian/test
CMD ["sh","-c"," npm install thread-sleep  && npm install  && node index"]