import PopUpProduct from "./PopUpProduct/PopUpProduct";
import {useDispatch, useSelector} from "react-redux";
import {deleteAll, togglePopUp} from "../../redux/actions";
import trashIcon from "./../../img/trash.svg";
import "./PopUp.css";

export default function PopUp() {
  const cartState = useSelector(state => state.cartState);
  const dispatch = useDispatch();
  const total = cartState.reduce((aggr, item) => aggr += (item.totalCount * item.price), 0);

  return (
    <>
      <div className="popup-wrapper" onClick={() => dispatch(togglePopUp())}/>
      <div className="popup slide-left">
        <div className="popup_header">
          <h3 className="total_price">Total Price: $ {total}</h3>
          <p>Delete All</p>
          <img src={trashIcon} alt="Trash Icon" className="delete_all_btn" onClick={() => {dispatch(deleteAll())}}/>
        </div>
        <div className="popup_products_wrapper">
          {cartState.map(product => <PopUpProduct key={product.id} product={product}/>)}
        </div>
      </div>
    </>
  );
}