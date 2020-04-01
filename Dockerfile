FROM node:12.9.0-buster


WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

CMD ["pm2-runtime", "event.js"]