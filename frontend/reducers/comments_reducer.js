import {CREATE_COMMENT, DELETE_COMMENT} from '../actions/comment'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case CREATE_COMMENT:
            return Object.assign({}, state, action.comment)
        case DELETE_COMMENT:
            return Object.assign({}, state, action.comment)
        default:
           return state;
    }
}

export default commentsReducer