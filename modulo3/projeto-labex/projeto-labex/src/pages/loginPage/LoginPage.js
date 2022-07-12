import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {Input, ButtonAdd} from "./styles"

function LoginPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const goToBack = () => {
    navigate(-1)
  }

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const Login = () => {
    console.log('aaa')
  }

    return (
      <div>
        <h2>Fazer Login</h2>
        <section>
          <Input
            type={"text"}
            value={name}
            onChange={handleName}
            placeholder={"Nome"}
          />

          <Input
            type={"email"}
            value={email}
            onChange={handleEmail}
            placeholder={"E-mail"}
          />

          <ButtonAdd onClick={Login}>Logar</ButtonAdd>
        </section>
        <button onClick={goToBack}>Voltar</button>
      </div>
    );
  }
  
  export default LoginPage;
  