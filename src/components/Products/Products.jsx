import Product from "./Product/Product";
import "./Products.css";

export default function Products({data, isOpenPopup, dispatch}) {
  return (
    <div className={isOpenPopup? "product_list blur" : "product_list"}>
      {data.map(product => <Product key={product.id} product={product} dispatch={dispatch}/>)}
    </div>
  );
}