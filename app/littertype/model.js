const mongoose = require('mongoose');

const { Schema } = mongoose;

const definition = {
    id: Number,
    title: String
};

const LitterTypeSchema = new Schema(definition, {});

module.exports = mongoose.model('LitterType', LitterTypeSchema, "LitterTypes");
