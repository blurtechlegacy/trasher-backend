const LitterStorage = require('./model');

exports.saveLitterStorage = (data, saveCb) => {
  const litterStorage = new LitterStorage(data);
  return litterStorage.save(saveCb);
};

exports.getLitterByCity = data => LitterStorage.find({ place: { city: data} });
