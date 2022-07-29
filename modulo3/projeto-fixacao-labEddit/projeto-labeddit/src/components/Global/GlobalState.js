import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Entrar")

  return (
    <GlobalContext.Provider value={{rightButton, setRightButton}}>
      {props.children}
    </GlobalContext.Provider>
  );
}



export default GlobalState;