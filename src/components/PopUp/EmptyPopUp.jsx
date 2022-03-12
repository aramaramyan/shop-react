import sadIcon from "./../../img/sadIcon.svg"
import "./EmptyPopUp.css";
import {ACTION_TYPES,} from "../../state";

export default function EmptyPopUp({dispatch}) {
  return (
    <>
      <div className="popup-wrapper" onClick={() => dispatch({type: ACTION_TYPES.TOGGLE_IS_OPEN_POPUP})}/>
      <div className="empty_popup slide-left">
        <h3>There are no products in your cart</h3>
        <img src={sadIcon} alt="Sad Icon"/>
      </div>
    </>

  );
}