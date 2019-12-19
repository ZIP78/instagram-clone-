import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session'

const _nullUser= Object.freeze({
    id: null
})

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
   let newState =  Object.assign({}, state)
   switch (action.type) {
       case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        case LOGOUT_CURRENT_USER:
            return _nullUser
       default:
           return state;
   }
}

export default sessionReducer