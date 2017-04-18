'use strict';

const redisConfig = require('./config.json').redis;
const redis = require('redis');

const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient(redisConfig.port, redisConfig.host);

module.exports.RedisClient = client;