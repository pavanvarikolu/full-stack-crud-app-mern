FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

RUN npm install nodemon

COPY . .

CMD [ "npm", "run", "dev" ]