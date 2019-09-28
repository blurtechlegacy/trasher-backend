const passport = require('passport');

const LitterStorage = require('./model');

const repository = require('./repository');

exports.getLS = async (req, res) => {
  if (req.query.city) {
    data = req.query.city;
    const lscity = await repository.getLitterStorageForCity(data);
    res.success(lscity)
  }
  else {
    const lsc = await repository.getLitterStorageForCity(req.user.address.city);
    res.success(lsc);
  }
};

exports.createLS = (req, res) => {
  const data = {
    latlng: {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    },
    lastCollect: Date.now(),
    place: {
      city: req.body.city,
      region: req.body.region,
      address: req.body.address
    },
    title: req.body.title,
    containers: req.body.containers
  };
  repository.saveLitterStorage(data, (err, doc) => {
    if (err) {
      return res.validationError(err);
    }
    return res.success(doc);
  });
};

//TODO допилить функцию (не работает save)
exports.updateCollectDate = async (req, res) => {
  console.log(req.params.id);
  let collectDate = req.body.collectDate? req.body.collectDate: Date.now();
  let litterStorage = await repository.getLitterStorageById(req.params.id);

  console.log(litterStorage);
  litterStorage = await repository.updateCollectTimeStamp(litterStorage, collectDate);
  res.success(litterStorage);
};

//
