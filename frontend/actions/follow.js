// import * as APIUtil from "../utils/follower";

// export const FOLLOW_USER = "FOLLOW_USER";

// // export const UNFOLLOW_USER = "UNFOLLOW_USER";

// const followUser = (user) => {
//   return {
//     type: FOLLOW_USER,
//     user,
//   };
// };

// export const follow = (userId) => (dispatch) => {
//   return APIUtil.follow(userId).then((user) => dispatch(followUser(user)));
// };

// export const unFollow = (userId) => (dispatch) => {
//   return APIUtil.deleteFollow(userId).then((user) =>
//     dispatch(followUser(user))
//   );
// };
