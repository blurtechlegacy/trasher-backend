const LitterStorage = require('../litterstorage/model');

const Litter = require('../litter/model');

const LitterType = require('../littertype/model');

exports.getCities = () => LitterStorage.find({}, "place.city").distinct("place.city");
