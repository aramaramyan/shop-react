import Product from "./Product/Product";
import "./Products.css";
import {useSelector} from "react-redux";

export default function Products() {
  const data = useSelector(state => state.data);
  const isOpenPopup = useSelector(state => state.isOpenPopup);

  return (
    <div className={isOpenPopup? "product_list blur" : "product_list"}>
      {data.map(product => <Product key={product.id} product={product}/>)}
    </div>
  );
}