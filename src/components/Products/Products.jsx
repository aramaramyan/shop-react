import {Context} from "../../context/MainContext";
import Product from "./Product/Product";
import "./Products.css";

export default function Products() {
  const context = Context();

  return (
    <div className={context.isOpenPopup? "product_list blur" : "product_list"}>
      {context.state.data.map(product => <Product key={product.id} product={product}/>)}
    </div>
  );
}