const mongoose = require('mongoose');

const { Schema } = mongoose;

const definiton = {
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
  bags: {
    paper: Number,
    glass: Number,
    bio: Number,
    plastic: Number,
    nonrecycl: Number,
    carton: Number,
    danger: Number
  },
  qr: {
    type: String
  }
};

const LitterSchema = new Schema(definition, {});

module.exports = mongoose.model('Litter', LitterSchema, "Litters");
