import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { PLANETS } from "../../constants/planets";
import { goToBack, goToLoginPage } from "../../routes/coordinator";
import { CreateContainer, Form } from "./styles";

function CreateTripPage() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  });

  useEffect(() => {
    if (token === null) {
      goToLoginPage(navigate);
      alert(`Você não tem permissão para acessar essa página!`);
    }
  }, []);

  const onSubmitCreateTrip = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem cadastrada com sucesso!")
        goToBack(navigate)
      })
      .catch((err) => {
        console.log("CreateTrip:", err.response);
        alert(`Algo deu errado, tente novamente`);
      });
      cleanFields()
  };

  return (
    <CreateContainer>
      <h1>Criar viagem</h1>
      <Form onSubmit={onSubmitCreateTrip}>
        <input
          name="name"
          type={"text"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required
        />

        <select
          name="planet"
          type={"text"}
          value={form.planet}
          onChange={onChange}
          placeholder={"Escolha um planeta"}
          required
        >
          <option>Escolha um Planeta</option>
          {PLANETS.map((planet) => {
            return (
              <option value={planet} key={planet}>
                {planet}
              </option>
            );
          })}
        </select>
        <input
          name="date"
          type={"date"}
          value={form.date}
          onChange={onChange}
          placeholder={"dd/mm/aaaa"}
          required
        />
        <textarea
          name="description"
          type={"text"}
          value={form.description}
          onChange={onChange}
          placeholder={"Descrição"}
          required
        />
        <input
          name="durationInDays"
          type={"number"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder={"Duração em dias"}
          required
        />
        <button>Enviar</button>
      </Form>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
    </CreateContainer>
  );
}

export default CreateTripPage;
