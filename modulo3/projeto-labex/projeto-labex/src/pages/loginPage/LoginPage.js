import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToAdminHomePage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

import { Input, ButtonAdd } from "./styles";

function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        console.log("login:", err.response);
        alert(`Algo deu errado, tente novamente`)
      });
  };

  // const getProtectedData = () => {
  //   const token = window.localStorage.getItem("token")

  //   axios.get(`${BASE_URL}/login`,{
  //     headers: {
  //       Authorization: token
  //     }
  //   }).then((res) => {
  //     // window.localStorage.setItem("token", res.data.token)
  //     console.log('deu boa')
  //   })
  //   .catch((err) => {
  //     console.log("login:", err)
  //   });
  // }

  return (
    <div>
      <h2>Fazer Login</h2>
      <section>
        <Input
          type={"email"}
          value={email}
          onChange={onChangeEmail}
          placeholder={"E-mail"}
        />

        <Input
          type={"password"}
          value={password}
          onChange={onChangePassword}
          placeholder={"Senha"}
        />
        <ButtonAdd onClick={onSubmitLogin}>Logar</ButtonAdd>
      </section>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
    </div>
  );
}

export default LoginPage;
