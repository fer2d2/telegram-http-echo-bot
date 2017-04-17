'use strict';

const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const telegram = require('./telegram');

telegram.client.onMaster(() => {
    app.listen(config.serverPort, function () {
        console.info(`Server listening on port ${config.serverPort}`);
    });

    app.post('/broadcast', function (request, response) {
        telegram.broadcast(request.body);
        response.send(request.body);
    });
});
