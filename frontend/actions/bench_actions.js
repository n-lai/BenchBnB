const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');
const BenchApiUtil = require('../util/bench_api_util');

const BenchActions = {
  fetchAllBenches(bounds) {
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },

  receiveAllBenches(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = BenchActions;
