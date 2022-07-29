import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm"
import {Title, SignUpPageContainer} from "./styled"

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <SignUpPageContainer>
      <Title >{'Olá, boas vindas ao LabEddit ;)'}</Title>
      <SignUpForm />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
