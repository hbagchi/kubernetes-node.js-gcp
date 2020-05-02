FROM node:14.1.0
COPY catalog/app.js .
COPY catalog/package*.json ./
RUN npm install
EXPOSE 3000
CMD node app.js
