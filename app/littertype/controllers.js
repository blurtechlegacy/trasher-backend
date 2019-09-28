
const Litter = require('./model');

const repository = require('./repository');

exports.getTypes = async (req, res) => {
  let types = await repository.getTypes();
  return res.success(types);
};

exports.getType = async (req, res) => {
  let type = await repository.getType(req.params.id);
  return res.success(type);
};
