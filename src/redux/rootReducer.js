import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import cartStateReducer from "./cartStateReducer";
import popupReducer from "./popupReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  cartState: cartStateReducer,
  isOpenPopup: popupReducer
})