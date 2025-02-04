FROM node:23-alpine3.20

LABEL maintainer="alric"

VOLUME [ "/var/node" ]

RUN adduser -h /var/node \
    -s /bin/sh \
    -D nodeapp

WORKDIR /var/node

COPY app.js .
RUN chown nodeapp:nodeapp app.js

EXPOSE 3000

ARG VERSION
ENV VERSION=${VERSION:-1.0.0}

USER nodeapp
CMD ["node", "app.js"]