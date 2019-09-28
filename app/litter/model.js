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
  types: [
    {
      bagtype: Number,
      bags: Number,
      mass: Number
    }
  ]

};

const LitterSchema = new Schema(definition, {});

module.exports = mongoose.model('Litter', LitterSchema, "Litters");
