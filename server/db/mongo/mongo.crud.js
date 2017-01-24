'use strict';

const config = require('./../../../config/config.js');
const connections = require('./mongo.connections.js');
const models = require('./mongo.schemas.js');

const mongoose = config.requires.mongoose;
mongoose.Promise = Promise;

let getConnection = function(str_user, str_db) {
  let connection = null;

  if(str_db === "dev")
    connection = connections.getDevConnection(str_user);
  else if(str_db === "test")
    connection = connections.getTestConnection(str_user);
  else if(str_db === "admin")
    connection = connections.getAdminConnection(str_user);
  else
    console.log("No connection made.");

  return connection;
};



module.exports = {
  create: function(str_user, str_db, str_collection, json_object) {
    console.log('Called create');

    let connection = getConnection(str_user, str_db);
    let model = models.getModels(str_collection.toLowerCase());

    let doc = new model(json_object);
    doc.save((err) => {
      if(err)
        console.log(err);
    });

    connection.close();
  },
  read: function(str_user, str_db, str_collection, json_object) {
    console.log('Called read');

    let connection = getConnection(str_user, str_db);
    let model = models.getModels();

    connection.disconnect();
  },
  update: function(str_user, str_db, str_collection, json_object) {
    console.log('Called update');

    let connection = getConnection(str_user, str_db);
    let model = models.getModels();

    connection.disconnect();
  },
  delete: function(str_user, str_db, str_collection, json_object) {
    console.log('Called delete');

    let connection = getConnection(str_user, str_db);
    let model = models.getModels();

    connection.disconnect();
  }
}
