import React, {useContext, useReducer} from "react";
import {ACTION_TYPES, initialState, reducer} from "../state";

const mainContext = React.createContext();

export function Context() {
  return useContext(mainContext);
}

export default function MainContext({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <mainContext.Provider value={{state:state, type: ACTION_TYPES, dispatch:dispatch}}>
      {children}
    </mainContext.Provider>
  );
}