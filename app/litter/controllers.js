
const Litter = require('./model');

const repository = require('./repository');

exports.createLitter = (req, res) => {
  const data = {
    client: req.user.id,
    storage: req.body.storage,
    throwDate: Date.now(),
    types: req.body.types
  };
  repository.createLitter(data, (err, doc) => {
    if (err) {
      return res.validationError(err);
    }
    return res.success(doc);
  });
};

exports.getLitterOfUser = (req, res) => {

};

exports.getLitterOfStorage = (req, res) => {

};

