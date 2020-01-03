import * as APIUtil from '../utils/post'


export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const fecthPosts = (posts) => (dispatch) => {
    return APIUtil.fetchPosts(posts).then(posts => dispatch(receivePosts(posts)))
}