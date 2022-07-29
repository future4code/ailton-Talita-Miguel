import React, { useContext } from "react";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { SignUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../components/Global/GlobalContext";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Checkbox,
} from "@mui/material";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { isLoading } = useContext(GlobalContext);
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { signUp } = SignUp();

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

        <Typography variant="body2" sx={{ mt: 4, mb: 2 }}>
          Ao continuar, você concorda com o nosso{" "}
          <span>Contrato de usuário</span> e nossa{" "}
          <span>Política de Privacidade</span>
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, mb: 4 }}>
          <Checkbox defaultChecked /> Eu concordo em receber emails sobre coisas
          legais no Labeddit{" "}
        </Typography>

        <Button
          type={"submit"}
          fullWidth
          variant="contained"
          margin="normal"
          style={{
            background: "linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)",
          }}
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Cadastrar</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
