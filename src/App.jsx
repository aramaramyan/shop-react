import {useEffect} from "react";
import {Context} from "./context/MainContext";
import PopUp from "./components/PopUp/PopUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import setLocalStorage from "./helpers/setLocalStoraje";
import EmptyPopUp from "./components/PopUp/EmptyPopUp";


function App() {

  const context = Context();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => context.dispatch({type:context.type.SET_STATE, data: data.products}));
  }, []);

  useEffect(() => {
    setLocalStorage(context.state.cartState);
  });

  return (
    <div className="App">
      <Header />
      {context.state.isOpenPopup && (context.state.cartState.length ? <PopUp /> :  <EmptyPopUp />)}
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
