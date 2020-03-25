// import * as APIUtil from "../utils/like";

// export const RECEIVE_SINGLE_LIKE = 'RECEIVE_SINGLE_LIKE'

// const receiveLike = (like) => {
//     return {
//         type: RECEIVE_SINGLE_LIKE,
//         like
//     }
// }

// export const likePost = (like) => (dispatch) => {
//     return APIUtil.postLike(like).then(like => dispatch(receiveLike(like)))
// }

// export const removeLike = (id) => (dispatch) => {
//     return APIUtil.deleteLike(id).then(() => dispatch(receiveLike(id)))
// }