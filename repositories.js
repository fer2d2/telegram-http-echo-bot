'use strict';

const SubscriptionRepository = require('./lowdb-subscription-repository').LowDBSubscriptionRepository;
const TopicRepository = require('./lowdb-topic-repository').LowDBTopicRepository;

module.exports.SubscriptionRepository = new SubscriptionRepository();
module.exports.TopicRepository = new TopicRepository();