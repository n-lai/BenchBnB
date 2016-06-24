const BenchApiUtil = {
  fetchAllBenches(bounds, cb) {
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      data: { bounds },
      success: function(response) {
        cb(response);
      },
      error: function(response) {
        console.log("error")
      }
    });
  }
};

module.exports = BenchApiUtil;
