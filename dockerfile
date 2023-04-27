FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN apt-get install -y nodejs yarn
RUN apt-get --assume-yes install libcap2-bin
RUN setcap cap_net_bind_service=+ep `readlink -f \`which node\``

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY arduino.json ./
COPY index.js ./
EXPOSE 8080