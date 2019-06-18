FROM keymetrics/pm2:latest-alpine
WORKDIR /home/debian/test/server
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN ls -al -R
CMD ["sh","-c"," npm install thread-sleep && pm2-runtime start pm2.json"]