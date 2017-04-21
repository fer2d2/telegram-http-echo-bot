'use strict';

const config = require('./config.json');
const TelegramBot = require('node-telegram-bot-api');

const client = new TelegramBot(config.telegramApiKey, {polling: true});

module.exports.client = client;

require('./telegram-controllers');
require('./telegram-broadcast');