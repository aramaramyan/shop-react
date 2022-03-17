import {ACTION_TYPES} from "./constants";
import setLocalStorage from "../helpers/setLocalStoraje";
import getLocalStorage from "../helpers/getLocalStorage";

const initialState = getLocalStorage() || [];

export default function cartStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.POPUP_MINUS_PRODUCT:
      return state.map(item => {
        if (item.id === action.payload.product.id && action.payload.product.totalCount > 1) {
          return {...item, totalCount: item.totalCount - 1}
        } else {
          return item;
        }
      });
    case ACTION_TYPES.POPUP_ADD_PRODUCT:
      return state.map(item => {
        if (item.id === action.payload.product.id && action.payload.product.totalCount > 1) {
          return {...item, totalCount: item.totalCount + 1}
        } else {
          return item;
        }
      });
    case ACTION_TYPES.ADD_TO_CART:
      if (state.length) {
        if (state.some(item => item.id === action.payload.product.id)) {
          return state.map((item => {
              if (item.id === action.payload.product.id) {
                return {...item, totalCount: item.totalCount + action.payload.product.totalCount}
              }
              return item;
            }));
        } else {
          return state.concat(action.payload.product);
        }
      } else {
        setLocalStorage([action.payload.product]);
        return [action.payload.product];
      }
    case ACTION_TYPES.DELETE_FROM_CART:
      localStorage.clear();
      const newState = state.filter((product) => product.id !== action.payload.id);
      setLocalStorage(newState);
      return newState;
    case ACTION_TYPES.DELETE_ALL:
      localStorage.clear();
      return [];
    default:
      return state;
  }
}