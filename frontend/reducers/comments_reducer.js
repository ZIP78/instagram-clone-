import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS,
} from "../actions/comment";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case CREATE_COMMENT:
      return Object.assign({}, state, action.comment);
    case DELETE_COMMENT:
      return Object.assign({}, state, action.comment);
    default:
      return state;
  }
};

export default commentsReducer;
