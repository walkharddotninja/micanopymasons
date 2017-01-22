'use strict';

const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({
  title: { type: String }
});

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
  email: { type: String, match: ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$, minlength: 5 },
  isAdmin: { type: Boolean, default: false, required: true }
});

const schemas = {
  "Title": titleSchema,
  "Rank": rankSchema,
  "Member": memberSchema
};

module.exports = {
  getSchemas: function() {
    return schemas;
  }
};
