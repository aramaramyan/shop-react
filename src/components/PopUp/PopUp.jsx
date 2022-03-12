import PopUpProduct from "./PopUpProduct/PopUpProduct";
import {ACTION_TYPES} from "../../state";
import trashIcon from "./../../img/trash.svg";
import "./PopUp.css";

export default function PopUp({cartState, dispatch}) {
  const total = cartState.reduce((aggr, item) => aggr += (item.totalCount * item.price), 0);

  return (
    <>
      <div className="popup-wrapper" onClick={() => dispatch({type:ACTION_TYPES.TOGGLE_IS_OPEN_POPUP})}/>
      <div className="popup slide-left">
        <div className="popup_header">
          <h3 className="total_price">Total Price: $ {total}</h3>
          <p>Delete All</p>
          <img src={trashIcon} alt="Trash Icon" className="delete_all_btn" onClick={() => {dispatch({type:ACTION_TYPES.DELETE_ALL})}}/>
        </div>
        <div className="popup_products_wrapper">
          {cartState.map(product => <PopUpProduct key={product.id} product={product} dispatch={dispatch}/>)}
        </div>
      </div>
    </>
  );
}