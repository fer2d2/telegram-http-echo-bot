'use strict';

const config = require('./config.json');

const Telegram = require('telegram-node-bot');
const telegramClient = new Telegram.Telegram(config.telegramApiKey, {
    workers: 1,
});

module.exports.client = telegramClient;

require('./telegram-router');
require('./telegram-broadcast');