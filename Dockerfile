FROM node:12.14.1-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 1453

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]