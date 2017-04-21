'use strict';

const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const broadcast = require('./telegram-broadcast').broadcast;

app.listen(config.serverPort, () => {
    console.info(`Server listening on port ${config.serverPort}`);
});

module.exports.app = app;

require('./server-controllers');
