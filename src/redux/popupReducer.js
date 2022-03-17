import {ACTION_TYPES} from "./constants";

const initialState = false;

export default function popupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_IS_OPEN_POPUP:
      return !state;
    default:
      return state;
  }
}