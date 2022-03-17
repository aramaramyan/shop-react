import {useDispatch, useSelector} from "react-redux";
import {togglePopUp} from "../../redux/actions";
import cart from "./../../img/cart.svg"
import logo from "./../../img/logo.png";
import "./Header.css";

export default function Header() {
  const cartState = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="title_container">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="title">Bootcamp Store</h3>
      </div>
      <div className="cart_container">
        <img src={cart} alt="cart logo" className="cart_logo" onClick={() => dispatch(togglePopUp())}/>
        {cartState.length ? <div className="product_count">{cartState.length}</div> : <></>}
      </div>
    </header>
  );
}