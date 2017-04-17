'use strict';

const config = require('./config.json');

const dirty = require('dirty');
const db = dirty(config.databaseFileName);

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(config.telegramApiKey, {
    workers: 1,
});

class EchoController extends TelegramBaseController {

    registerHandler($) {
        let chatId = $.message.chat.id;
        let registrationTimestamp = Date.now();

        if (!db.get(chatId)) {
            db.set(chatId, {updatedAt: registrationTimestamp});
        }

        $.sendMessage(`Added chat ${chatId} to database`);
    }

    registrationsHandler($) {
        let registrations = [];

        db.forEach(function (key, val) {
            registrations.push(key);
        });

        $.sendMessage(JSON.stringify(registrations));
    }

    get routes() {
        return {
            'registerCommand': 'registerHandler',
            'registrationsCommand': 'registrationsHandler'
        }
    }
}

tg.router.when(
    new TextCommand('register', 'registerCommand'),
    new EchoController()
).when(
    new TextCommand('registrations', 'registrationsCommand'),
    new EchoController()
);

function broadcast(data) {
    db.forEach((key, val) => {
        let message = '';
        for (let property in data) {
            message += `${property}: ${data[property]}\n`;
        }

        tg.api.sendMessage(key, message);
    });
}

module.exports.client = tg;
module.exports.broadcast = broadcast;