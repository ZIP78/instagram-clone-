import {RECEIVE_POSTS, CREATE_POST, RECEIVE_POST} from '../actions/post'

const postsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, state, action.post)    
        case CREATE_POST:
            let post = action.post
            return Object.assign({}, state, post)     
        default:
            return state;
    }
}

export default postsReducer