const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signup(userData) {
    SessionApiUtil.signup(userData, this.receiveCurrentUser);
  },

  login(userData) {
    SessionApiUtil.login(userData, this.receiveCurrentUser);
  },

  logout() {
    SessionApiUtil.logout(this.removeCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }
};

module.exports = SessionActions;
