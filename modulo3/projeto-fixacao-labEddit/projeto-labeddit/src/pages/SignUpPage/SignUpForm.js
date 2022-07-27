import React, { useContext, useState } from "react";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { SignUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../components/Global/GlobalContext";
import { Button, TextField, CircularProgress } from "@mui/material";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { isLoading } = useContext(GlobalContext);
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const {signUp} = SignUp()

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          required
          autoFocus
          margin="normal"
        />

        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          type={"email"}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          type={"password"}
          fullWidth
          required
          margin="normal"
        />

        <Button type={"submit"} fullWidth variant="contained" margin="normal">
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Fazer Cadastro</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
