import {useDispatch} from "react-redux";
import {deleteFromCart, popupAddProduct, popupMinusProduct} from "../../../redux/actions";
import minusIcon from "../../../img/minus.svg";
import plusIcon from "../../../img/plus.svg";
import trashIcon from "../../../img/trash.svg";
import "./PopUpProduct.css";

export default function PopUpProduct({product}) {
  const dispatch = useDispatch();

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
          <img src={minusIcon} alt="Minus Icon" className="popup_btn" onClick={() => dispatch(popupMinusProduct(product))}/>
          <img src={plusIcon} alt="Plus Icon" className="popup_btn" onClick={() => dispatch(popupAddProduct(product))}/>
          <img src={trashIcon} alt="Trash Icon" className="popup_btn" onClick={() => dispatch(deleteFromCart(product.id))}/>
        </div>
      </section>
    </div>
  );
}