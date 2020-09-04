import { TOGGLE_DARKMODE } from "../actions/session";

const darkmodeReducer = (state = { darkThemeEnabled: false }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    //   return Object.assign({}, state, !state.darkThemeEnabled);

    default:
      return state;
  }
};

export default darkmodeReducer;
