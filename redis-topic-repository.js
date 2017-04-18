'use strict';

const uuidV4 = require('uuid/v4');

const HASH_ID = "topics";

/**
 * Structure: topics => [topicName => {token, createdAt}]
 */
class RedisTopicRepository {

    constructor() {
        this.redisClient = require('./redis-connection').RedisClient;
    }

    get token() {
        return uuidV4();
    }

    add(topicName, token) {
        this.redisClient.hget(HASH_ID, topicName, (err, response) => {
            if(err) {
                throw err;
            }

            if(response) {
                throw 'Topic already exists';
            }

            this.redisClient.hset(HASH_ID, topicName, {
                token: token,
                createdAt: Date.now()
            });
        });
    }

    findByTopicName(topicName) {
        return this.redisClient.hgetAsync(HASH_ID, topicName);
    }

    all() {
        return this.redisClient.hgetAsync(HASH_ID);
    }
}

module.exports.RedisTopicRepository = RedisTopicRepository;