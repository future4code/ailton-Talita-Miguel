import React from "react";
import Typography from "@mui/material/Typography";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm"

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <>
      <Typography align={"center"}>Olá, boas vinsdas ao LabEddit</Typography>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
