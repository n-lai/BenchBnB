const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

let _benches = {};

const BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      BenchStore.resetAllBenches(payload.benches);
      break;
  }
};

BenchStore.all = function() {
  const benches = [];
  for (let id in _benches) {
    if (_benches.hasOwnProperty(id)) {
      benches.push(_benches[id]);
    }
  }
  return benches;
};

BenchStore.resetAllBenches = function(benches) {
  _benches = {};
  _benches = benches;
  BenchStore.__emitChange();
};


module.exports = BenchStore;
