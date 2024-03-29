import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import {Login} from '../../services/user'
import { Button, TextField, CircularProgress } from "@mui/material";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)
  const {login} = Login()
  
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setIsLoading)
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
          title="Senha com no mínimo 8 caracteres!"
          type={"password"}
        />

        <Button type={"submit"} fullWidth variant="contained" sx={{
            background: 'linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)', borderRadius: 20, mt:2
          }}>
          {isLoading ? <CircularProgress color="inherit" size={24}/> : <>Fazer Login</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
