import "./PopUpProduct.css";
import minusIcon from "../../../img/minus.svg";
import plusIcon from "../../../img/plus.svg";
import trashIcon from "../../../img/trash.svg";

export default function PopUpProduct({product, deleteFromCart, popupAddProduct, popupMinusProduct}) {
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
            popupMinusProduct(product);
          }}/>
          <img src={plusIcon} alt="Plus Icon" className="popup_btn" onClick={() => {
            popupAddProduct(product);
          }}/>
          <img src={trashIcon} alt="Trash Icon" className="popup_btn" onClick={() => {
            deleteFromCart(product.id);
          }}/>
        </div>
      </section>
    </div>
  );
}