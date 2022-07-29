import React, { useContext } from "react";
import { AppBar, Button } from "@mui/material";
import { StyledToolBar } from "./styled";
import logo from "../../assets/image/logo.svg";
import { goToLoginPage, goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../components/Global/GlobalContext";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { rightButton, setRightButton } = useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButton("Entrar");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#EDEDED",
        color: "#4088CB",
      }}
    >
      <StyledToolBar>
        <Button color="inherit" onClick={() => goToFeedPage(navigate)}>
          <img src={logo} alt="LabEddit" />
        </Button>
        <Button color="inherit" onClick={rightButtonAction}>
          {rightButton}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
