FROM node:8.10.0

WORKDIR /tmp

RUN mkdir -p /tmp/app /tmp/input /tmp/output /tmp/scripts
COPY /app/ /tmp/app/
COPY /input /tmp/input/
COPY /output /tmp/output/
COPY /scripts /tmp/scripts/

RUN cd app/ && yarn build

WORKDIR /tmp/app

CMD ["yarn", "start"]
