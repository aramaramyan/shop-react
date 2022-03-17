import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./redux/actions";
import Header from "./components/Header/Header";
import PopUp from "./components/PopUp/PopUp";
import EmptyPopUp from "./components/PopUp/EmptyPopUp";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import setLocalStorage from "./helpers/setLocalStoraje";

function App() {
  const cartState = useSelector(state => state.cartState);
  const isOpenPopup = useSelector(state => state.isOpenPopup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setLocalStorage(cartState);
  });

  return (
    <div className="App">
      <Header />
      {isOpenPopup && (cartState.length ? <PopUp /> :  <EmptyPopUp />)}
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
