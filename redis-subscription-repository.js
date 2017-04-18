'use strict';

const HASH_ID = "subscriptions";

/**
 * Structure: subscriptions => [chatId => [channelName1, channelName2, …]]
 */
class RedisSubscriptionRepository {

    constructor() {
        this.redisClient = require('./redis-connection').RedisClient;
    }

    add(chatId, channelName) {
        this.redisClient.hget(HASH_ID, chatId, (err, response) => {
            if(err) {
                throw err;
            }

            if(response.indexOf(channelName)) {
                throw 'Topic already subscribed';
            }

            response.push(channelName);

            this.redisClient.hset(HASH_ID, chatId, response);
        });
    }

    all(chatId) {
        return this.redisClient.hgetAsync(HASH_ID, chatId);
    }
}

module.exports.RedisSubscriptionRepository = RedisSubscriptionRepository;