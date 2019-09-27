const passport = require('passport');

const repository = require('./repository');

exports.getLS = async (req, res) => {
  const data = req.params.city;
  const lscity = await repository.getLitterStorageByCity(data);
  res.success(lscity);
};
