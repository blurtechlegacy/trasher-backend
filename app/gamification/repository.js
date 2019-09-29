const LitterStorage = require('../litterstorage/model');

const Litter = require('../litter/model');

const LitterType = require('../littertype/model');

const User = require('../user/model');

exports.getAllInfoReducedByUser = (user) => Litter.find({client: user.id});

exports.mapReduceUser = (user) => Litter.mapReduce({
  map: () => {
    for(var i in this.types) {
      emit(
        this.types[i].bagtype,
        this.types[i].bags
      );
    }
  },
  reduce: (key, values) => {
    var sum=0;
    for (var i in values) {
      sum += values[i]
    }
    return { total: sum}
  },
  options: {
    query: {client: user.id},
    out: "LitterReduce"
  }
}).find();
