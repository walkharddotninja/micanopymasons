'use strict';

const config = require('./config/config.js');
const staticRoutes = require('./server/api/static.routes.js');
const commonRoutes = require('./server/api/common.routes.js');

const hapi = require('hapi');
const path = require('path');
const inert = require('inert');
const vision = require('vision');
const swagger = require('hapi-swagger');
const hrv = require('hapi-react-views');

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

    // server.views({
    //   engines: {
    //     jsx: hrv
    //   },
    //   relativeTo: entryPoint,
    //   path: 'views'
    // });

    server.start((err) => {
      if(err)
        console.log(err);
      else
        console.log('Server Running:', config.server.host, ":", config.server.port);
    });
});

console.log(entryPoint);

staticRoutes.register(server, entryPoint);
commonRoutes.register(server);
