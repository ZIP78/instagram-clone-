import * as APIUtil from "../utils/follower";

export const ALL_FOLLOW = "ALL_FOLLOW";
export const FOLLOWING_USERS = "FOLLOWING_USERS";

const followUser = (follows) => {
  return {
    type: ALL_FOLLOW,
    follows,
  };
};

export const requestFollows = () => (dispatch) => {
  return APIUtil.allFollows().then((follows) => dispatch(followUser(follows)));
};
