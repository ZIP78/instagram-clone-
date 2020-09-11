import { TOGGLE_DARKMODE, UNTOGGLE_DARKMODE } from "../actions/session";

const darkmodeReducer = (
  state = JSON.parse(localStorage.getItem("dark")),
  action
) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return true;
    case UNTOGGLE_DARKMODE:
      return false;

    default:
      return state;
  }
};

export default darkmodeReducer;
