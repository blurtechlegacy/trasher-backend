
const Litter = require('./model');

const repository = require('./repository');

exports.createLitter = (req, res) => {
  const data = {
    client: req.user.id,
    storage: req.body.storage,
    throwDate: Date.now(),
    type: {

    }
  }
};

exports.getLitterOfUser = (req, res) => {

};

exports.getLitterOfStorage = (req, res) => {

};

