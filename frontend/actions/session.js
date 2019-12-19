import * as APIUtil from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

 const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

 const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)))
}

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)))
}


export const logout = () => (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}



