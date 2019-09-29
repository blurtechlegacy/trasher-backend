const qr = require('./model');
const Types = require('mongoose').Types;

exports.getBag = (data) => qr.findOne({_id: data.id, expired: false});

exports.expire = (obj) => {
  obj.expired = true;
  obj.save();
};

exports.saveCodes = (arr, saveCb) => {
  qr.create(arr, saveCb);
};
