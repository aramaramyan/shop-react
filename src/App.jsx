import {useState, useEffect} from "react";
import PopUp from "./components/PopUp/PopUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import setLocalStorage from "./helpers/setLocalStoraje";
import getLocalStorage from "./helpers/getLocalStorage";
import EmptyPopUp from "./components/PopUp/EmptyPopUp";

function App() {
  const [state, setState] = useState([]);
  const [cartState, setCartState] = useState(getLocalStorage() || []);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setState(data.products));
  }, []);

  useEffect(() => {
    setLocalStorage(cartState);
  },);

  function toggleIsOpenPopup() {
    setIsOpenPopup(prev => !prev);
  }

  function addToCart(product) {
    console.log(product);
    if (cartState.length) {
      if (cartState.some(item => item.id === product.id)) {
        setCartState(prev => prev.map((item => {
          if (item.id === product.id) {
            return {...item, totalCount: item.totalCount + product.totalCount}
          }
          return item;
        })));
      } else {
        setCartState(prev => prev.concat(product));
      }

    } else {
      setCartState([product]);
      setLocalStorage([product]);
    }
  }

  function deleteFromCart(id) {
    const newState = cartState.filter((product) => product.id !== id);
    setCartState(newState);
  }

  function popupAddProduct(product) {
    setCartState(prev => prev.map(item => {
      if(item.id === product.id) {
        return {...item, totalCount: item.totalCount + 1}
      }
      else {
        return item;
      }
    }))
  }

  function popupMinusProduct(product) {
    setCartState(prev => prev.map(item => {
      if(item.id === product.id && product.totalCount > 1) {
        return {...item, totalCount: item.totalCount - 1}
      }
      else {
        return item;
      }
    }))
  }

  function deleteAll() {
    setCartState(prev=> prev.length = 0);
  }

  return (
    <div className="App">
      <Header cartState={cartState} toggleIsOpenPopup={toggleIsOpenPopup}/>
      {isOpenPopup && (cartState.length ?
        <PopUp
        cartState={cartState}
        deleteAll={deleteAll}
        deleteFromCart={deleteFromCart}
        popupAddProduct={popupAddProduct}
        popupMinusProduct={popupMinusProduct}
        toggleIsOpenPopup={toggleIsOpenPopup}
        /> :  <EmptyPopUp toggleIsOpenPopup={toggleIsOpenPopup}/>)}
      <Products
        state={state}
        addToCart={addToCart}
        isOpenPopup={isOpenPopup}
      />
      <Footer/>
    </div>
  );
}

export default App;
