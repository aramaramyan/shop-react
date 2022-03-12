import {Context} from "../../context/MainContext";
import sadIcon from "./../../img/sadIcon.svg"
import "./EmptyPopUp.css";

export default function EmptyPopUp() {
  const context = Context();

  return (
    <>
      <div className="popup-wrapper" onClick={() => context.dispatch({type: context.type.TOGGLE_IS_OPEN_POPUP})}/>
      <div className="empty_popup slide-left">
        <h3>There are no products in your cart</h3>
        <img src={sadIcon} alt="Sad Icon"/>
      </div>
    </>

  );
}