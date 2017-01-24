'use strict';

module.exports = {
  register: function(server, entryPoint) {
    server.route({
      method: 'GET',
      path: '/{params}',
      config: {
        description: 'home',
        notes: 'goes to home',
        tags: ['api'],
        handler: function(req, res) {
          res(req.params.params);
        },
      }
    });
  }
};
