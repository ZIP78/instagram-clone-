import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from "../actions/session";
import merge from "lodash/merge";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      debugger;
      // return action.users;
      // return Object.assign({}, state, action.users);
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
