const repository = require('./repository');

exports.getDataForUser = async (req, res) => {
  const user = req.user;
  let data = await repository.getAllInfoReducedByUser(user);
  return res.success(data);
};

exports.getMapReduce = async (req, res) => {
  const user = req.user;
  let mr = await repository.mapReduceUser(user);
  return res.success(mr);
};


