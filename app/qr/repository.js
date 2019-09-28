const qr = require('./model');

exports.createLitter = (data, saveCb) => {
  const litter = new Litter(data);
  return litter.save(saveCb);
};

exports.getLitterOfUser = (user) => Litter.find({client: user}).populate("client").populate("storage");

exports.getLitterOfLs = (id) => Litter.find({id: id});

exports.saveCodes = (arr, saveCb) => {
  qr.create(arr, saveCb);
};
