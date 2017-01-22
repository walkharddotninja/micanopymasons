'use strict';

const schemas = require("./schemas.js");
const mongoose = require("mongoose");

const schemaList = schemas.getSchemas();

module.exports = {
  getModels = function() {
    var models = {};
    for(var i in schemaList)
      models[i] = mongoose.model(i, schemaList[i])
    return models;
  }
};
