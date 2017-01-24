'use strict';

const config = require('./config/config.js');
const staticRoutes = require('./server/api/static.routes.js');
const reactRoutes = require('./server/api/react.routes.js');
const indexRoutes = require('./server/api/index.routes.js');

const hapi = config.requires.hapi;
const path = config.requires.path;
const inert = config.requires.inert;
const vision = config.requires.vision;
const swagger = config.requires.swagger;
const hrv = config.requires.hrv;

const entryPoint = path.join(__dirname + "/");

const server = new hapi.Server();

server.connection({
  host: config.server.host,
  port: config.server.port,
});

server.register([ vision ],
  (err) => {
    if(err)
      console.log(err);
    else
      require('babel-register') ({
        presets: ['es2015', 'react'],
      });

    server.views({
      engines: {
        jsx: hrv
      },
      relativeTo: entryPoint,
      path: 'views'
    });
});

server.register([
  inert,
  vision,
  {
    "register": swagger,
  }],
  (err) => {
    server.start((err) => {
      if(err)
        console.log(err);
      else
        console.log('Server Running:', config.server.host, ":", config.server.port);
    });
});

console.log(entryPoint);

staticRoutes.register(server, entryPoint);
reactRoutes.register(server);
indexRoutes.register(server);
