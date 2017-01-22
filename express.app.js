'use strict';

const indexApi = require('./server/api/express.index.api.js');

const express = require('express');
const app = express();

app.set('views', __dirname + '/');
app.use(express.static(__dirname + '/'));

indexApi.register(app, __dirname + '/modules/index/index.html');

app.listen(8080, function() {
  console.log('Server running: ', 8080);
});
