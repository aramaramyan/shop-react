import {togglePopUp} from "../../redux/actions";
import {useDispatch} from "react-redux";
import sadIcon from "./../../img/sadIcon.svg"
import "./EmptyPopUp.css";

export default function EmptyPopUp() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="popup-wrapper" onClick={() => dispatch(togglePopUp())}/>
      <div className="empty_popup slide-left">
        <h3>There are no products in your cart</h3>
        <img src={sadIcon} alt="Sad Icon"/>
      </div>
    </>

  );
}