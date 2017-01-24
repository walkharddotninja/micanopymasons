'use strict';

const config = require('./../../../config/config.js');
const mongoose = config.requires.mongoose;

const titleSchema = new mongoose.Schema({
  title: { type: String }
});

const Title = mongoose.model('Title', titleSchema);

const rankSchema = new mongoose.Schema({
  rank: { type: String }
});

const memberSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  title: [ titleSchema ],
  rank: [ rankSchema ],
  phone: {
    personal: { type: String, match: /\d/g, minlength: 10, maxlength: 10 },
    work: { type: String, match: /\d/g, minlength: 10, maxlength: 10 }
  },
  email: { type: String, match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/g, minlength: 5 },
  isAdmin: { type: Boolean, default: false, required: true }
});

// const schemas = {
//   "Title": titleSchema,
//   "Rank": rankSchema,
//   "Member": memberSchema
// };

let models = {
  "title": Title
};

module.exports = {
  getModels: function(str_model) {
    return models[str_model];
  }
  // getModels: function() {
  //   let models = {};
  //   for(var i of schemas)
  //     models[i] = mongoose.model(i, schemas[i])
  //   return models;
  // }
};
