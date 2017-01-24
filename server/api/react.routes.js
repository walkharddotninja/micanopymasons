'use strict';

const db = require('./../db/mongo/mongo.crud.js');

module.exports = {
  register: function(server) {
    server.route({
      method: 'GET',
      path: '/',
      // handler: {
      //   view: 'Default',
      // },
      handler: (req, res) => {
        console.log('STUFFS');
        db.create(null, "test", "title", { title: "Grand Pubah" });
        return res.view('Default');
      }
    });
  }
};
