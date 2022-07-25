import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Headers from "../../components/Headers";
import { goToHomePage, goToAdminHomePage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
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

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, verifique preenchimento dos campos",
          footer: `Código do erro ${err.response.status}`,
        });
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
            <ButtonLog onClick={() => goToHomePage(navigate)}>Voltar</ButtonLog>
          </Buttons>
        </Form>
      </Border>
    </LoginContainer>
  );
}

export default LoginPage;
