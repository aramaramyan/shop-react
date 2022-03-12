import {useState} from "react";
import {Context} from "../../../context/MainContext";
import minusIcon from "./../../../img/minus.svg";
import plusIcon from "./../../../img/plus.svg";
import addIcon from "./../../../img/addToCart.svg";
import "./Product.css";

export default function Product({product}) {

  const [count, setCount] = useState(1)

  const context = Context();

  function addCount() {
    setCount(prev => prev + 1);
  }

  function subtractCount() {
    if(count > 1) {
      setCount(prev => prev - 1);
    }
  }

  function addToBasket() {
    const productItem = {
      id: product.id,
      title: product.title,
      image: product.images[0],
      price: product.price,
      totalCount: count
    }
    context.dispatch({type: context.type.ADD_TO_CART, product: productItem});
    setCount(1);
  }

  return (
    <div className="product_container">
      <h3 className="product_title">{product.title}</h3>
      <div className="image">
        <img src={product.images[0]} alt="Product"/>
      </div>
      <div className="content">
        <p className="product_category"><b>Category: </b>{product.category}</p>
        <p className="product_rating"><b>Rating: </b>{product.rating}</p>
        <p className="price"><b>Price: </b>$ {product.price}</p>
        <div className="buttons_wrapper">
          <img src={minusIcon} alt="Minus Icon" className="btn" onClick={subtractCount} />
          <p className="count">{count}</p>
          <img src={plusIcon} alt="Plus Icon" className="btn" onClick={addCount} />
        </div>
        <img src={addIcon} alt="Add Button" className="add_btn animation" onClick={addToBasket} />
      </div>
    </div>
  );
}