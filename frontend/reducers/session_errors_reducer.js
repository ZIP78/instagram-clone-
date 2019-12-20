import { RECEIVE_ERRORS} from '../actions/session' 

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.error    
        default:
            return state;
    }
}

export default sessionErrorsReducer