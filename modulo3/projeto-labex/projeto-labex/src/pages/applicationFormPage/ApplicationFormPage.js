import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ApplicationContainer} from "./styles"
import {goToBack} from "../../routes/coordinator"

function ApplicationFormPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <ApplicationContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option>Escolha uma viagem</option>
      </select>
      <input type={"text"} value={name} onChange={onChangeName} placeholder={"Nome"} />
      <input type={"number"} value={idade} onChange={onChangeIdade} placeholder={"Idade"} />
      <textarea
        type={"text"}
        value={description}
        onChange={onChangeDescription}
        placeholder={"Descrição"}
      />
      <input type={"text"} value={profession} onChange={onChangeProfession} placeholder={"Profissão"} />
      <select>
        <option value="">Escolha um país</option>
      </select>
      <button>Enviar</button>
      <button onClick={()=> goToBack(navigate)}>Voltar</button>
    </ApplicationContainer>
  );
}

export default ApplicationFormPage;
