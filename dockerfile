FROM node

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY arduino.json ./
COPY index.js ./
EXPOSE 8080