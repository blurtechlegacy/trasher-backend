const Litter = require('./model');

exports.createLitter = (data, saveCb) => {
  const litter = new Litter(data);
  return litter.save(saveCb);
};

exports.getLitterOfUser = (user) => Litter.find({client: user});

exports.getLitterOfLs = (litterStorage) => Litter.find({storage: litterStorage});
