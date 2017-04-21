'use strict';

const SubscriptionRepository = require('./lowdb-subscription-repository').LowDBSubscriptionRepository;
const TopicRepository = require('./lowdb-topic-repository').LowDBTopicRepository;

let subscriptionRepository = new SubscriptionRepository();
let topicRepository = new TopicRepository();

module.exports.SubscriptionRepository = subscriptionRepository;
module.exports.TopicRepository = topicRepository;