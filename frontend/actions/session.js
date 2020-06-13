import * as APIUtil from "../utils/session";
import * as API2Util from "../utils/follower";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (error) => {
  return {
    type: RECEIVE_ERRORS,
    error,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const requestUsers = () => (dispatch) => {
  // debugger;
  return APIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));
};

export const profilePicture = (pic) => (dispatch) => {
  return APIUtil.editUser(pic).then((pic) => dispatch(receiveCurrentUser(pic)));
};

export const follow = (userId) => (dispatch) => {
  return API2Util.follow(userId).then((user) =>
    dispatch(receiveCurrentUser(user))
  );
};

export const unFollow = (userId) => (dispatch) => {
  return API2Util.deleteFollow(userId).then((user) =>
    dispatch(receiveCurrentUser(user))
  );
};
