'use strict';

const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const telegram = require('./telegram');

telegram.client.onMaster(() => {
    app.listen(config.serverPort, () => {
        console.info(`Server listening on port ${config.serverPort}`);
    });

    app.use((request, response, next) => {
        let token = request.get('Authorization');
        let topic = request.body.topic;

        findByTopicName(topic).then((response) => {
            if(! response === token) {
                throw 'Token does not match topic';
            }

            next();
        }).error((err) => {
            throw 'Topic not found'
        });
    });

    app.post('/broadcast', (request, response) => {
        let channel = request.body.channel;
        let message = request.body.message;



        telegram.broadcast(request.body.message);
        response.send(request.body);
    });
});
