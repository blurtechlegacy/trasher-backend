const LitterStorage = require('./model');

exports.saveLitterStorage = (data, saveCb) => {
  const litterStorage = new LitterStorage(data);
  return litterStorage.save(saveCb);
};

exports.getLitterStorageForCity = data => LitterStorage.find({'place.city': data});

exports.getLitterStorage = data => LitterStorage.find();

exports.getLitterStorageById = data => LitterStorage.find({ _id: data.id});
