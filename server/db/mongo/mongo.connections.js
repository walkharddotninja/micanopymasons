'use strict';

const config = require('./../../../config/config.js');
const mongoose = config.requires.mongoose;
mongoose.Promise = Promise;

module.exports = {
  getDevConnection: function(str_user) {
    let connection = null;

    if(str_user === "admin")
      connection = mongoose.createConnection(config.db.admin.dev);
    else
      connection = mongoose.createConnection(config.db.guest.dev);

    return connection;
  },
  getTestConnection: function(str_user) {
    let connection = null;

    if(str_user === "admin")
      connection = mongoose.createConnection(config.db.admin.test);
    else
      connection = mongoose.createConnection(config.db.guest.test);

    return connection;
  },
  getAdminConnection: function(str_user) {
    let connection = null;

    if(str_user === "admin")
      connection = mongoose.createConnection(config.db.admin.admin);
    else
      connection = mongoose.createConnection(config.db.guest.admin);

    return connection;
  },
};
