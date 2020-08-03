import { ALL_FOLLOW } from "../actions/follow";

const followersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ALL_FOLLOW:
      return action.follows;
    default:
      return state;
  }
};

export default followersReducer;
