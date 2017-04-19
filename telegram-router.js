'use strict';

const telegramClient = require('telegram').client;
const TextCommand = require('telegram-node-bot').TextCommand;
const EchoController = require('./telegram-echo-controller').EchoController;

/**
 * /subscribe :topicName
 *   - Ask for topic name
 * /topics
 *   - List of available topics
 */
telegramClient.router.when(
    new TextCommand('subscribe', 'subscribeCommand'),
    new EchoController()
).when(
    new TextCommand('topics', 'topicsCommand'),
    new EchoController()
);
