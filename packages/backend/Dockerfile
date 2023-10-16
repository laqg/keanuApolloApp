FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./

RUN npm install
RUN npm install -g --force tsc
RUN npm install -g --force concurrently
RUN npm install -g --force typescript

RUN tsc

COPY . .

EXPOSE 4000
CMD [ "node", "./dist/index.js" ]