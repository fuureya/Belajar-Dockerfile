FROM node:alpine3.22

ENV NODE_ENV=3000

ENV NODE_LOGS=logs

WORKDIR /app

RUN mkdir ${NODE_LOGS}

RUN npm init -y

RUN npm install express

COPY . .

EXPOSE 3000
VOLUME ${NODE_LOGS}

ENTRYPOINT [ "node", "index.js" ]
CMD .