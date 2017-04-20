'use strict';

const telegramClient = require('./telegram').client;
const SubscriptionRepository = require('./repositories').SubscriptionRepository;

function broadcast(topic, data) {
    SubscriptionRepository.findByTopic(topic).forEach((chat) => {
        let message = '';
        for (let property in data) {
            message += `${property}: ${data[property]}\n`;
        }

        telegramClient.api.sendMessage(chat, message);
    });
}

module.exports.broadcast = broadcast;