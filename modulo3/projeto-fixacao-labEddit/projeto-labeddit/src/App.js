import { ThemeProvider } from "@mui/material";
import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./components/Global/GlobalState";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalState>
          <Header />
          <Router />
        </GlobalState>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
