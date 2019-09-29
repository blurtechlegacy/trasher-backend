const repository = require('./repository');

exports.getLitterByCity = (req, res) => {
  let city = req.params.city;
  let litter = repository.getLitterByCity(city);
  return res.success(litter);
};

exports.getCities = async (req, res) => {
  let cities = await repository.getCities();
  return res.success(cities);
};
