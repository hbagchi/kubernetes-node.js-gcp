FROM node:14.1.0
COPY order/app.js .
COPY order/package*.json ./
RUN npm install
EXPOSE 3001
CMD node app.js
