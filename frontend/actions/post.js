import * as APIUtil from '../utils/post'


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const CREATE_POST = 'CREATE_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

const createSinglePost = (post) => {
    return {
        type: CREATE_POST,
        post
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const requestAllPost = () => (dispatch) => {
    return APIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
}

export const requestPost = (id) => (dispatch) => {
    return APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
}

export const createPost = (post) => dispatch => {
    return APIUtil.createPost(post).then(post => dispatch(createSinglePost(post)))
}
export const likePost = like => dispatch => {
  return APIUtil.postLike(like).then(like => dispatch(receivePost(like)));
};

export const removeLike = id => dispatch => {
  return APIUtil.deleteLike(id).then(() => dispatch(receivePost(id)));
};