import getLocalStorage from "../helpers/getLocalStorage";
import setLocalStorage from "../helpers/setLocalStoraje";

const initialState = {
  data: [],
  cartState: getLocalStorage() || [],
  isOpenPopup: false
};

const ACTION_TYPES = {
  SET_STATE: "setState",
  TOGGLE_IS_OPEN_POPUP: "toggleIsOpenPopup",
  ADD_TO_CART: "addToCart",
  DELETE_FROM_CART: "deleteFromCart",
  POPUP_ADD_PRODUCT: "popupAddProduct",
  POPUP_MINUS_PRODUCT: "popupMinusProduct",
  DELETE_ALL: "deleteAll"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_STATE:
      return {...state, data: action.data};
    case ACTION_TYPES.TOGGLE_IS_OPEN_POPUP:
      return {...state, isOpenPopup: !state.isOpenPopup};
    case ACTION_TYPES.ADD_TO_CART:
      if (state.cartState.length) {
        if (state.cartState.some(item => item.id === action.product.id)) {
          return {...state, cartState: state.cartState.map((item => {
            if (item.id === action.product.id) {
              return {...item, totalCount: item.totalCount + action.product.totalCount}
            }
            return item;
          }))};
        } else {
          return {...state, cartState: state.cartState.concat(action.product)};
        }
      } else {
        setLocalStorage([action.product]);
        return {...state, cartState: [action.product]};
      }
    case ACTION_TYPES.DELETE_FROM_CART:
      return {...state, cartState: state.cartState.filter((product) => product.id !== action.id)};
    case ACTION_TYPES.POPUP_ADD_PRODUCT:
      return {...state, cartState: state.cartState.map(item => {
          if(item.id === action.product.id) {
            return {...item, totalCount: item.totalCount + 1}
          }
          else {
            return item;
          }
        })}
    case ACTION_TYPES.POPUP_MINUS_PRODUCT:
      return {...state, cartState: state.cartState.map(item => {
      if(item.id === action.product.id && action.product.totalCount > 1) {
        return {...item, totalCount: item.totalCount - 1}
      }
      else {
        return item;
      }
    })}
    case ACTION_TYPES.DELETE_ALL:
      return {...state, cartState: []};
    default:
      throw  new Error();
  }
}

export {initialState, ACTION_TYPES, reducer}