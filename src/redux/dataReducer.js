import {ACTION_TYPES} from "./constants";

const initialState = [];

export default function dataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.SET_DATA:
      return action.payload.data.products;
    default:
      return state;
  }
}