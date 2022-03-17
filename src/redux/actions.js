import {ACTION_TYPES} from "./constants";

export function fetchData() {
  return async dispatch => {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    dispatch({type: ACTION_TYPES.SET_DATA, payload: {
      data: json
      }});
  };
}

export function togglePopUp() {
  return {
    type: ACTION_TYPES.TOGGLE_IS_OPEN_POPUP,
  };
}

export function deleteAll() {
  return {
    type: ACTION_TYPES.DELETE_ALL
  };
}

export function popupAddProduct(product) {
  return {
    type: ACTION_TYPES.POPUP_ADD_PRODUCT,
    payload: {
      product: product
    }
  };
}

export function popupMinusProduct(product) {
  return {
    type: ACTION_TYPES.POPUP_MINUS_PRODUCT,
    payload: {
      product: product
    }
  };
}

export function addToCart(productItem) {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: {
      product: productItem
    }
  };
}

export function deleteFromCart(id) {
  return {
    type: ACTION_TYPES.DELETE_FROM_CART,
    payload: {
      id: id
    }
  };
}