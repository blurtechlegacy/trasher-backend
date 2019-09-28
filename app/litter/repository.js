const Litter = require('./model');

exports.createLitter = (data, saveCb) => {
  const litter = new Litter(data);
  return litter.save(saveCb);
};

exports.getLitterOfUser = (user) => Litter.find({client: user}).populate("client").populate("storage");

exports.getLitterOfLs = (litterStorage) => Litter.find({storage: litterStorage});
