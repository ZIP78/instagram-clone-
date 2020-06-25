import { ALL_FOLLOW, FOLLOWING_USERS } from "../actions/follow";

const followersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ALL_FOLLOW:
      return action.follows;
    case FOLLOWING_USERS:
      return action.follows;
    default:
      return state;
  }
};

export default followersReducer;
