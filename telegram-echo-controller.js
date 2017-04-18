'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class EchoController extends TelegramBaseController {

    registerHandler($) {
        let chatId = $.message.chat.id;
        let registrationTimestamp = Date.now();

        // TODO repository
        // if (!db.get(chatId)) {
        //     db.set(chatId, {updatedAt: registrationTimestamp});
        // }

        $.sendMessage(`Added chat ${chatId} to database`);
    }

    registrationsHandler($) {
        let registrations = [];

        // TODO repository
        // db.forEach(function (key, val) {
        //     registrations.push(key);
        // });

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