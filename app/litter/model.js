const mongoose = require('mongoose');

const { Schema } = mongoose;

const definition = {
  client: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  storage: {
    type: Schema.Types.ObjectId,
    ref: "LitterStorage"
  },
  throwDate: {
    type: Date,
    default: Date.now()
  },
  types: {
    paper: {
      bag: Number,
      mass: Number
    },
    glass: {
      bag: Number,
      mass: Number
    },
    bio: {
      bag: Number,
      mass: Number
    },
    plastic: {
      bag: Number,
      mass: Number
    },
    nonrecycle: {
      bag: Number,
      mass: Number
    },
    carton: {
      bag: Number,
      mass: Number
    },
    danger: {
      bag: Number,
      mass: Number
    }
  },
  qr: {
    type: String
  }
};

const LitterSchema = new Schema(definition, {});

module.exports = mongoose.model('Litter', LitterSchema, "Litters");
