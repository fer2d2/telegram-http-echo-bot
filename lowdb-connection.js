'use strict';

const databaseFileName = require('config.json').databaseFileName;
const db = low(databaseFileName);

db.defaults({
    subscriptions: [],
    topics: []
}).write();

module.exports.client = db;