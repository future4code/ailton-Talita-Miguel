import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Headers from "../../components/Headers";
import { goToBack, goToAdminHomePage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";

import {
  LoginContainer,
  Input,
  ButtonLog,
  Form,
  Buttons,
  Title,
  Border,
} from "./styles";

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token !== null) {
      alert(`Você já está logado`);
      goToAdminHomePage(navigate);
    }
  }, []);

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        console.log("login:", err.response);
        alert(`Algo deu errado, tente novamente`);
      });
    cleanFields();
  };

  return (
    <LoginContainer>
      <Headers />
      <Border>
        <Title>
          <h1>Login</h1>
        </Title>
        <Form onSubmit={onSubmitLogin}>
          <Input
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={"E-mail"}
            required
          />

          <Input
            name="password"
            type={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Senha"}
            required
            pattern={"^.{6,}"}
            title={"Senha deve conter no mínimo 6 caracteres"}
          />
          <Buttons>
            <ButtonLog>Logar</ButtonLog>
            <RiArrowGoBackFill onClick={() => goToBack(navigate)} />
          </Buttons>
        </Form>
      </Border>
    </LoginContainer>
  );
}

export default LoginPage;
