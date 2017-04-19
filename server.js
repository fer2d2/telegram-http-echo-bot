'use strict';

const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const telegram = require('./telegram');
const broadcast = require('./telegram-broadcast').broadcast;

const TopicRepository = require('repositories').TopicRepository;

telegram.client.onMaster(() => {
    app.listen(config.serverPort, () => {
        console.info(`Server listening on port ${config.serverPort}`);
    });
});

app.post('/broadcast', (request, response) => {
    let topic = request.body.topic;
    let message = request.body.message;

    if(!TopicRepository.exists(topic)) {
        response.sendStatus(404);
    }

    broadcast(topic, message);
    response.send(request.body);
});

app.post('/topic', (request, response) => {
    let topicName = request.body.name;
    TopicRepository.add(topicName);

    response.sendStatus(200);
});