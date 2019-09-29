const repository = require('./repository');

exports.getLitterByCity = (req, res) => {


};

exports.getCities = async (req, res) => {
  let cities = await repository.getCities();
  return res.success(cities);
};
