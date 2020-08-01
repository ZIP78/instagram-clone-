import { RECEIVE_CURRENT_USER, RECEIVE_USERS, TEST } from "../actions/session";
import merge from "lodash/merge";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      debugger;
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    case TEST:
      debugger;
      return Object.assign({}, state, { [currentUser.id]: action.testing });
    default:
      return state;
  }
};

export default usersReducer;
