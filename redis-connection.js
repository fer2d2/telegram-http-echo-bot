'use strict';

const redis = require('redis');

const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

module.exports.RedisClient = client;