'use strict';

const config = require('./config.json');

const dirty = require('dirty');
const db = dirty(config.databaseFileName);

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

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

module.exports.EchoController = EchoController;