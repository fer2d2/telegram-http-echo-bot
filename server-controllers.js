'use strict';

const app = require('./server').app;
const TopicRepository = require('./repositories').TopicRepository;
const telegramBroadcast = require('./telegram-broadcast').broadcast;

app.post('/broadcast', (request, response, next) => {
    let topic = request.body.topic;
    let message = request.body.message;

    if(!topic || !message) {
        return next({
            message: "No topic or message were sent",
            status: 400
        });
    }

    if(!TopicRepository.exists(topic)) {
        return next({
            message: "Topic does not exists",
            status: 400
        });
    }

    telegramBroadcast(topic, message);
    response.send(request.body);
});

app.post('/topic', (request, response, next) => {
    let topic = request.body.topic;

    if(!topic) {
        return next({
            message: "No topic were sent",
            status: 400
        });
    }

    if(TopicRepository.exists(topic)) {
        return next({
            message: "Topic already exists",
            status: 400
        });
    }

    TopicRepository.add(topic);

    response.sendStatus(200);
});

app.use((error, request, response, next) => {
    response
        .status(error.status || 500)
        .send({
            message: error.message,
            status: error.status
        });
});