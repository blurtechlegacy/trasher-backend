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
    1: {
      bag: Number,
      mass: Number
    },
    2: {
      bag: Number,
      mass: Number
    },
    3: {
      bag: Number,
      mass: Number
    },
    4: {
      bag: Number,
      mass: Number
    },
    5: {
      bag: Number,
      mass: Number
    },
    6: {
      bag: Number,
      mass: Number
    },
    7: {
      bag: Number,
      mass: Number
    },
    8: {
      bag: Number,
      mass: Number
    },
    9: {
      bag: Number,
      mass: Number
    },
    10: {
      bag: Number,
      mass: Number
    },
    11: {
      bag: Number,
      mass: Number
    }
  },
  bags: {
    paper: Number,
    glass: Number,
    bio: Number,
    plastic: Number,
    nonrecycl: Number,
    carton: Number,
    danger: Number
  }
};

const LitterSchema = new Schema(definition, {});

module.exports = mongoose.model('Litter', LitterSchema, "Litters");
