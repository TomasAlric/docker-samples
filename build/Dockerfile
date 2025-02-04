FROM node:23-alpine3.20

LABEL maintainer="alric"

RUN mkdir /var/node

WORKDIR /var/node

COPY app.js .

EXPOSE 3000

ARG VERSION
ENV VERSION=${VERSION:-1.0.0}

CMD ["node", "app.js"]