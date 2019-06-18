FROM keymetrics/pm2:latest-alpine
WORKDIR /home/debian/test/server
CMD ["sh","-c"," npm install thread-sleep && npm install pm2 -g && npm install  && pm2-runtime index.js"]