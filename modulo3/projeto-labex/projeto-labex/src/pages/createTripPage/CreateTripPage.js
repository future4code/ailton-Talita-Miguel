import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/url";
import Headers from "../../components/Headers";
import axios from "axios";
import planetas from "../../assets/img/planetas.png";
import { PLANETS } from "../../constants/planets";
import { goToBack, goToLoginPage } from "../../routes/coordinator";
import {
  CreateContainer,
  Form,
  Title,
  Planet,
  Buttons,
  Button,
  PlanetImg,
  Body,
} from "./styles";

function CreateTripPage() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useEffect(() => {
    if (token === null) {
      goToLoginPage(navigate);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você não tem permissão para acessar essa página!",
      });
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
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Viagem cadastrada com sucesso!',
          showConfirmButton: false,
          timer: 1800
        })
        goToBack(navigate);
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
    <CreateContainer>
      <Headers />
      <Body>
        <Title>
          <h1>Criar viagem</h1>
        </Title>
        <Planet>
          <PlanetImg src={planetas} alt="Planetas" />
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
            <Buttons>
              <Button>Enviar</Button>
              <Button onClick={() => goToBack(navigate)}>Voltar</Button>
            </Buttons>
          </Form>
        </Planet>
      </Body>
    </CreateContainer>
  );
}

export default CreateTripPage;
