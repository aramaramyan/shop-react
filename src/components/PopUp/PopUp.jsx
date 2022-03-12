import PopUpProduct from "./PopUpProduct/PopUpProduct";
import {Context} from "../../context/MainContext";
import trashIcon from "./../../img/trash.svg";
import "./PopUp.css";

export default function PopUp() {
  const context = Context();

  const total = context.state.cartState.reduce((aggr, item) => aggr += (item.totalCount * item.price), 0);

  return (
    <>
      <div className="popup-wrapper" onClick={() => context.dispatch({type:context.type.TOGGLE_IS_OPEN_POPUP})}/>
      <div className="popup slide-left">
        <div className="popup_header">
          <h3 className="total_price">Total Price: $ {total}</h3>
          <p>Delete All</p>
          <img src={trashIcon} alt="Trash Icon" className="delete_all_btn" onClick={() => {context.dispatch({type: context.type.DELETE_ALL})}}/>
        </div>
        <div className="popup_products_wrapper">
          {context.state.cartState.map(product => <PopUpProduct key={product.id} product={product}/>)}
        </div>
      </div>
    </>
  );
}