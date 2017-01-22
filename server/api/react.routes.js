'use strict';

module.exports = {
  register: function(server) {
    server.route({
      method: 'GET',
      path: '/',
      handler: {
        view: 'Default'
      }
    });
  }
};
