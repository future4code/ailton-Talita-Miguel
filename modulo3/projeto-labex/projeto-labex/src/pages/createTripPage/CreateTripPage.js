import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {goToBack} from "../../routes/coordinator"
import {CreateContainer} from "./styles"

function CreateTripPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <CreateContainer>
      <h1>Criar viagem</h1>
      <input type={"text"} value={name} onChange={onChangeName} placeholder={"Nome"} />
      <select>
        <option>Escolha um Planeta</option>
      </select>
      <input type={"date"} value={date} onChange={onChangeDate} placeholder={"dd/mm/aaaa"} />
      <textarea
        type={"text"}
        value={description}
        onChange={onChangeDescription}
        placeholder={"Descrição"}
      />
      <input type={"text"} value={duration} onChange={onChangeDuration} placeholder={"Duração em dias"} />
      <select>
        <option value="">Escolha um país</option>
      </select>
      <button>Enviar</button>
      <button onClick={()=> goToBack(navigate)}>Voltar</button>
    </CreateContainer>
  );
}

export default CreateTripPage;
