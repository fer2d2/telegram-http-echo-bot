'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

const SubscriptionRepository = require('repositories').SubscriptionRepository;
const TopicRepository = require('repositories').TopicRepository;

class EchoController extends TelegramBaseController {

    subscribeHandler($) {
        let chat = $.message.chat.id;
        let topic = ''; // TODO

        SubscriptionRepository.add(chat, topic);

        $.sendMessage(`Subscribed to topic ${topic}`);
    }

    topicsHandler($) {
        let topics = TopicRepository.all();
        $.sendMessage(JSON.stringify(topics));
    }

    get routes() {
        return {
            'subscribeCommand': 'subscribeHandler',
            'topicsCommand': 'topicsHandler'
        }
    }
}

module.exports.EchoController = EchoController;