const LitterType = require('./model');

exports.getTypes = () => LitterType.find();

exports.getType = (id) => LitterType.find({id: id});
