'use strict';

const SubscriptionRepository = require('./redis-subscription-repository').RedisSubscriptionRepository;
const TopicRepository = require('./redis-topic-repository').RedisTopicRepository;

module.exports.SubscriptionRepository = new SubscriptionRepository();
module.exports.TopicRepository = new TopicRepository();