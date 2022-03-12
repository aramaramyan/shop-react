import {useEffect, useReducer} from "react";
import PopUp from "./components/PopUp/PopUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import setLocalStorage from "./helpers/setLocalStoraje";
import EmptyPopUp from "./components/PopUp/EmptyPopUp";
import {initialState, ACTION_TYPES, reducer} from "./state";


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => dispatch({type:ACTION_TYPES.SET_STATE, data: data.products}));
  }, []);

  useEffect(() => {
    setLocalStorage(state.cartState);
  });

  function toggleIsOpenPopup() {
    dispatch({type: ACTION_TYPES.TOGGLE_IS_OPEN_POPUP});
  }

  return (
    <div className="App">
      <Header cartState={state.cartState} toggleIsOpenPopup={toggleIsOpenPopup}/>
      {state.isOpenPopup && (state.cartState.length ?
        <PopUp cartState={state.cartState} dispatch={dispatch}/> :  <EmptyPopUp dispatch={dispatch}/>)}

      <Products data={state.data} isOpenPopup={state.isOpenPopup} dispatch={dispatch}/>

      <Footer/>
    </div>
  );
}

export default App;
