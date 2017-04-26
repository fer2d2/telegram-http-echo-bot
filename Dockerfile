FROM node:boron

LABEL maintainer "morohernandez.fernando@gmail.com"

# docker build -t fernandomtc/mtc-jenkins-status-bot

ENV NPM_ACTION serve

ARG telegram_token

#############################

RUN mkdir -p /var/www && \
  cd /var/www && \
  git clone https://github.com/fer2d2/telegram-http-echo-bot.git

WORKDIR /var/www/telegram-http-echo-bot

RUN cp config.json.tmpl config.json && \
  sed -i "s/MY_AWESOME_TOKEN/${telegram_token}/g" config.json

RUN npm install

#############################

CMD npm run-script ${NPM_ACTION}
