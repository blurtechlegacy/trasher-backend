const qr = require('./model');

exports.getBags = (data) => qr.find({_id: data.id, count: data.count, expired: false});

exports.expite = (obj) => {
  obj.expired = true;
  obj.save();
};

exports.saveCodes = (arr, saveCb) => {
  qr.create(arr, saveCb);
};
