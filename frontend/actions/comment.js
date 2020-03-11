import * as APIUtil from "../utils/comment"

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

const receiveComment = (comment) => {
    return {
        type: CREATE_COMMENT,
        comment
    }
}

const removeComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
}



export const createComment = (comment) => dispatch => {
    return APIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = (commentId) => dispatch => {
    return APIUtil.removeComment(commentId).then(() => dispatch(removeComment(commentId)))
}