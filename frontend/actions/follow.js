import * as APIUtil from "../utils/follower";

export const ALL_FOLLOW = "ALL_FOLLOW";

const followUser = (follows) => {
  return {
    type: ALL_FOLLOW,
    follows,
  };
};

export const requestFollows = () => (dispatch) => {
  return APIUtil.allFollows().then((user) => dispatch(followUser(user)));
};
