const LitterStorage = require('../litterstorage/model');

const Litter = require('../litter/model');

const LitterType = require('../littertype/model');

const User = require('../user/model');

const  Types = require('mongoose').Types;

exports.getAllInfoReducedByUser = (user) => Litter.find({client: user.id});

o = {
  map: function() {
    for(var i in this.types) {
      self = this;
      emit(
        this.types[i].bagtype,
        this.types[i].bags
      );
    }
  },
  reduce: function (key, values) {
    var sum=0;
    for (var i in values) {
      sum += values[i]
    }
    return { total: sum}
  },
  resolveToObject: true
};

exports.mapReduceUser = (user) => Litter.mapReduce({
  ...o,
  query: {client: user.id}
});
