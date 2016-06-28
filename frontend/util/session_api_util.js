const SessionApiUtil = {
  signup(user, cb) {
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: { user },
      success: (resp) => {
        cb(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  login(user, cb) {
    $.ajax({
      method: 'post',
      url: '/api/session',
      data: { user },
      success: (resp) => {
        cb(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  logout(cb) {
    $.ajax({
      method: 'delete',
      url: '/api/session',
      success: (resp) => {
        cb(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  }
};

module.exports = SessionApiUtil;
