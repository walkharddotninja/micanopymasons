'use strict';

module.exports = {
  register: function(server, entryPoint) {
    server.route({
      method: 'GET',
      path: '/{param*}',
      config: {
        description: 'home',
        notes: 'goes to home',
        tags: ['api'],
        handler: {
          directory: {
            path: entryPoint,
            index: ['./modules/index/index.html'],
          }
        },
      }
    });
  }
};
