import * as APIUtil from "../utils/like";

export const RECEIVE_SINGLE_LIKE = 'RECEIVE_SINGLE_LIKE'

const receiveLike = (like) => {
    return {
        type: RECEIVE_SINGLE_LIKE,
        like
    }
}

export const likePost = (like) => (dispatch) => {
    return APIUtil.postLike(like).then(like => dispatch(receiveLike(like)))
}

export const removeLike = (postId) => (dispatch) => {
    return APIUtil.deleteLike(postId).then(() => dispatch(receiveLike(postId)))
}