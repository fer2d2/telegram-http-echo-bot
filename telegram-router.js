'use strict';

const telegramClient = require('telegram').client;
const TextCommand = require('telegram-node-bot').TextCommand;
const EchoController = require('./telegram-echo-controller').EchoController;

/**
 * /new
 *   - Ask for topic name
 *   - BOT: "Your token for HTTP Requests: 1bfedf9d-2dc2-4932-aabf-ab70ffc8f934"
 *   FORMAT: [topicName => {token, createdAt}]
 * /subscribe :topicName
 *   - Ask for topic name
 *   FORMAT: [chatId => [topicName1, topicName2, …]]
 * /channels
 *   - List of available topics
 */
telegramClient.router.when(
    new TextCommand('register', 'registerCommand'),
    new EchoController()
).when(
    new TextCommand('registrations', 'registrationsCommand'),
    new EchoController()
);
