'use strict';

class LowDBSubscriptionRepository {

    constructor() {
        this.dbClient = require('./lowdb-connection').client;
        this.subscriptionsManager = this.dbClient.get('subscriptions');
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
        }).value();
    }
}

module.exports.LowDBSubscriptionRepository = LowDBSubscriptionRepository;