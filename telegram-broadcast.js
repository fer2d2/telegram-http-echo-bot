'use strict';

const telegramClient = require('./telegram').client;
const SubscriptionRepository = require('./repositories').SubscriptionRepository;
const StrUtils = require('./string-utils');

function broadcast(topic, data) {
    let topics = SubscriptionRepository.findByTopic(topic);

    if(!Array.isArray(topic)) {
        topics = [topics];
    }

    topics.forEach((subscription) => {
        let message = StrUtils.objectToFormattedText(data);
        telegramClient.sendMessage(subscription.chat, message);
    });
}

module.exports.broadcast = broadcast;