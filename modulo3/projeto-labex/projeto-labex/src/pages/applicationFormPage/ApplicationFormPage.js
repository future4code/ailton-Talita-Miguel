import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option>Escolha uma viagem</option>
      </select>
      <input type={"text"} value={""} onChange={""} placeholder={"Nome"} />
      <input type={"text"} value={""} onChange={""} placeholder={"Idade"} />
      <textarea
        type={"text"}
        value={""}
        onChange={""}
        placeholder={"Descrição"}
      />
      <input type={"text"} value={""} onChange={""} placeholder={"Profissão"} />
      <select>
        <option value="">Escolha um país</option>
      </select>
      <button>Enviar</button>
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
}

export default ApplicationFormPage;
