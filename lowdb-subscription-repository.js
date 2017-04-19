'use strict';

class LowDBSubscriptionRepository {

    constructor() {
        let dbClient = require('./lowdb-connection').client;
        this.subscriptionsManager = dbClient.get('subscriptions');
    }

    add(chat, topic) {
        let subscriptionFound = {
            chat: chat,
            topic: topic
        };

        if (!this.subscriptionsManager.find(subscriptionFound).value()) {
            this.subscriptionsManager.push(subscriptionFound).write();
        }
    }

    findByTopic(topic) {
        return this.subscriptionsManager.find({
            topic: topic
        }).map('chat').value();
    }
}

module.exports.LowDBSubscriptionRepository = LowDBSubscriptionRepository;