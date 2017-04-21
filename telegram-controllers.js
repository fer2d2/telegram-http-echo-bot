'use strict';

const TelegramClient = require('./telegram').client;
const TopicRepository = require('./repositories').TopicRepository;
const SubscriptionRepository = require('./repositories').SubscriptionRepository;
const StrUtils = require('./string-utils');

/**
 * /subscribe :topicName
 *   - Subscribe to topic
 */
TelegramClient.onText(/\/subscribe ([a-zA-Z0-9_\-]+)/, (message, match) => {
    let chat = message.chat.id;

    let topic = match[1];
    if (!TopicRepository.exists(topic)) {
        TelegramClient.sendMessage(chat, "Topic not found");
        return;
    }

    SubscriptionRepository.add(chat, topic);
    TelegramClient.sendMessage(chat, `Subscribed to topic ${topic}`);
});

/**
 * /topics
 *   - List of available topics
 */
TelegramClient.onText(/\/topics/, (message, match) => {
    let topics = TopicRepository.allTopicNames();
    let chat = message.chat.id;
    let topicsFormatted = StrUtils.arrayOfStringToMultipleLines(topics);

    TelegramClient.sendMessage(chat, topicsFormatted);
});