import {Context} from "../../context/MainContext";
import cart from "./../../img/cart.svg"
import logo from "./../../img/logo.png";
import "./Header.css";

export default function Header() {
  const context = Context();

  return (
    <header className="header">
      <div className="title_container">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="title">Bootcamp Store</h3>
      </div>
      <div className="cart_container">
        <img src={cart} alt="cart logo" className="cart_logo" onClick={() => context.dispatch({type: context.type.TOGGLE_IS_OPEN_POPUP})}/>
        {context.state.cartState.length ? <div className="product_count">{context.state.cartState.length}</div> : <></>}
      </div>
    </header>
  );
}