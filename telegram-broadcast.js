'use strict';

const telegramClient = require('telegram').client;

function broadcast(data) {
    db.forEach((key, val) => {
        let message = '';
        for (let property in data) {
            message += `${property}: ${data[property]}\n`;
        }

        telegramClient.api.sendMessage(key, message);
    });
}

module.exports.broadcast = broadcast;