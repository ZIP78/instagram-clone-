import * as APIUtil from "../utils/comment";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

const removeComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment,
  };
};

export const getComments = () => (dispatch) => {
  // debugger;
  return APIUtil.fetchComments().then((comments) =>
    dispatch(receiveComments(comments))
  );
};

export const createComment = (comment) => (dispatch) => {
  return APIUtil.createComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return APIUtil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
};
