FROM node
WORKDIR /home/debian/test/server
CMD ["sh","-c"," npm install thread-sleep && npm install pm2 -g && npm install  && pm2 start index.js"]