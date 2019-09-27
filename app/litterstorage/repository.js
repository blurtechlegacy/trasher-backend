const LitterStorage = require('./model');

exports.saveLitterStorage = (data, saveCb) => {
  const litterStorage = new LitterStorage(data);
  return litterStorage.save(saveCb);
};

exports.getLitterStorageForCity = data => LitterStorage.find({'place.city': data});

exports.getLitterStorage = () => LitterStorage.find();

exports.getLitterStorageById = data => LitterStorage.find({ id: data.id});

exports.updateCollectTimeStamp = (obj, data, saveCb) => {
  obj.lastCollect = data;
  return obj.save(saveCb);
};

exports.deleteLitterStorage = ls => ls.remove();
