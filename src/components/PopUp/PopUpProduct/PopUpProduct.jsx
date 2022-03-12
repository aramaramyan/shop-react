import {ACTION_TYPES} from "../../../state";
import minusIcon from "../../../img/minus.svg";
import plusIcon from "../../../img/plus.svg";
import trashIcon from "../../../img/trash.svg";
import "./PopUpProduct.css";

export default function PopUpProduct({product, dispatch}) {
  return (
    <div className="popup_product">
      <div className="popup_img">
        <img src={product.image} alt={product.title}/>
      </div>
      <section className="title_section">
        <p className="popup_title">{product.title}</p>
        <p className="product_total_price">Price: $ {product.price * product.totalCount}</p>
      </section>
      <section className="buttons_section">
        <p className="total_count"><b>X </b>{product.totalCount}</p>
        <div className="popup_buttons">
          <img src={minusIcon} alt="Minus Icon" className="popup_btn" onClick={() => {
            dispatch({type:ACTION_TYPES.POPUP_MINUS_PRODUCT, product: product});
          }}/>
          <img src={plusIcon} alt="Plus Icon" className="popup_btn" onClick={() => {
            dispatch({type: ACTION_TYPES.POPUP_ADD_PRODUCT, product: product});
          }}/>
          <img src={trashIcon} alt="Trash Icon" className="popup_btn" onClick={() => {
            dispatch({type: ACTION_TYPES.DELETE_FROM_CART, id: product.id});
          }}/>
        </div>
      </section>
    </div>
  );
}