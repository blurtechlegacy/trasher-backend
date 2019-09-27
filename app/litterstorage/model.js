const mongoose = require('mongoose');

const { Schema } = mongoose;

const definition = {
  latitude: {
    type: Number,
    required: true
  },
  longitude:{
    type: Number,
    required: true
  },
  lastCollect: {
    type: Date,
    default: Date.now()
  },
  place: {
    city: {
      type: String
    },
    region: {
      type: String
    }
  }
};

const UserSchema = new Schema(definition, {});

module.exports = mongoose.model('LitterStorage', UserSchema, "LitterStorages");
