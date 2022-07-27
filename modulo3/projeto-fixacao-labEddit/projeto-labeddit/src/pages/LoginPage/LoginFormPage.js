import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import {Login} from '../../services/user'
import { GlobalContext } from "../../components/Global/GlobalContext";
import { Button, TextField, CircularProgress } from "@mui/material";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const { isLoading } = useContext(GlobalContext);
  const {login} = Login()
  
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate)
  };


  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          pattern={"^.{8,}"}
          type={"password"}
        />

        <Button type={"submit"} fullWidth variant="contained" margin="normal">
          {isLoading ? <CircularProgress color="inherit" size={24}/> : <>Fazer Login</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
