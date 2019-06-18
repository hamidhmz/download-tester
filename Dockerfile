FROM keymetrics/pm2:latest-alpine
WORKDIR /home/debian/test/server
COPY pm2.json /home/debian/test/server
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN pm2 install pm2-server-monit
RUN ls -al -R
CMD ["sh","-c"," npm install thread-sleep && pm2-runtime start pm2.json"]