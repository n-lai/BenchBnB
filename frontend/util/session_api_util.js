const SessionApiUtil = {
  signup(user, cb) {
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: { user },
      success: (resp) => {
        cb(resp);
      }
    });
  },

  login(user, cb) {
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: { user },
      success: (resp) => {
        cb(resp);
      }
    });
  },

  logout(user, cb) {
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: { user },
      success: (resp) => {
        cb(resp);
      }
    });
  }
};

module.exports = SessionApiUtil;
