import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{rightButton, setRightButton, isLoading, setIsLoading}}>
      {props.children}
    </GlobalContext.Provider>
  );
}



export default GlobalState;