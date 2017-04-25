FROM node:boron

LABEL maintainer "morohernandez.fernando@gmail.com"

# docker build -t fernandomtc/mtc-jenkins-status-bot

ENV NPM_ACTION serve

#############################

RUN mkdir -p /var/www && \
  cd /var/www && \
  git clone https://github.com/fer2d2/telegram-http-echo-bot.git

WORKDIR /var/www/telegram-http-echo-bot

RUN npm install

#############################

CMD npm run-script ${NPM_ACTION}
