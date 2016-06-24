const BenchApiUtil = {
  fetchAllBenches(cb) {
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      success: function(response) {
        cb(response);
      }
    });
  }
};

module.exports = BenchApiUtil;
