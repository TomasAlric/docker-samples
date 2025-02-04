FROM node:23-alpine3.20

LABEL maintainer="alric"

RUN mkdir /var/node

WORKDIR /var/node

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]