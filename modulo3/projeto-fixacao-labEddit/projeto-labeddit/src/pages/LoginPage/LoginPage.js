import React from "react";
import {
  ScreenContainer,
  LogoImage,
  InputsContainer,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/image/logo-labEddit.svg";
import { Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginFormPage";
import { goToSignupPage } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <Typography align={"center"}>
        O projeto de rede social da Labenu
      </Typography>
      <InputsContainer>
        <LoginForm />
      <Divider sx={{ width: '100%', m:2, bgcolor:'#F9B24E' }}/>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          type={"submit"}
          fullWidth
          variant="outlined"
          margin="normal"
          onClick={() => goToSignupPage(navigate)}
          sx={{borderRadius: 20}}
        >
          Crie uma conta!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
