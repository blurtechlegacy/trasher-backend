const passport = require('passport');

const LitterStorage = require('./model');

const repository = require('./repository');

exports.getLS = async (req, res) => {
  if (req.query.city) {
    data = req.query.city;
    console.log("нахуй иди");
    console.log(data);
    const lscity = await repository.getLitterStorageForCity(data);
    res.success(lscity)
  }
  else {
    console.log("серьезно нахуй иди");
    const lsc = await repository.getLitterStorage();
    res.success(lsc);
  }
};

exports.createLS = (req, res) => {
  const data = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    lastCollect: Date.now(),
    place: {
      city: req.body.city,
      region: req.body.region
    }
  };
  repository.saveLitterStorage(data, (err, doc) => {
    if (err) {
      return res.validationError(err);
    }
    return res.success(doc);
  });
}
