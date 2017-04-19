'use strict';

class LowDBTopicRepository {

    constructor() {
        let dbClient = require('./lowdb-connection').client;
        this.topicsManager = dbClient.get('topics');
    }

    add(name) {
        let topicFound = {
            name: name
        };

        if (!this.topicsManager.find(topicFound).value()) {
            topicFound.createdAt = Date.now();
            this.topicsManager.push(topicFound).write();
        }
    }

    exists(name) {
        let topicFound = {
            name: name
        };

        return this.topicsManager.find(topicFound).value() !== null; // TODO null or [] ?
    }

    all() {
        return this.topicsManager.map('name').value();
    }
}

module.exports.LowDBTopicRepository = LowDBTopicRepository;