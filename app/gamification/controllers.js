const repository = require('./repository');

exports.getDataForUser = async (req, res) => {
  const user = req.user;
  let data = await repository.getAllInfoReducedByUser(user);
  return res.success(data);
};

exports.getMapReduce = async (req, res) => {
  const user = req.user;
  let mr = await repository.mapReduceUser(user)
    .then((res) => {
      console.log(res);
      return res.results
    })
    .then((doc) => res.success(doc));
};


