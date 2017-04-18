'use strict';

const SubscriptionRepository = new require('./redis-subscription-repository').RedisSubscriptionRepository;
const TopicRepository = new require('./redis-topic-repository').RedisTopicRepository;

module.exports.SubscriptionRepository = new SubscriptionRepository();
module.exports.TopicRepository = new TopicRepository();