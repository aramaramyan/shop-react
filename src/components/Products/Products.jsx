import Product from "./Product/Product";
import "./Products.css";

export default function Products({state, addToCart, isOpenPopup}) {

  return (

    <div className={isOpenPopup? "product_list blur" : "product_list"}>
      {state.map(product => <Product
        key={product.id}
        product={product}
        addToCart={addToCart}/>)}
    </div>
  );
}