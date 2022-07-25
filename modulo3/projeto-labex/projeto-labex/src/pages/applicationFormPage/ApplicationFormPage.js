import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import Headers from "../../components/Headers";
import Swal from 'sweetalert2'
import axios from "axios";
import planetas from "../../assets/img/planeta1.png";
import { COUNTRIES } from "../../constants/countries";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../routes/coordinator";
import {
  ApplyContainer,
  Form,
  Title,
  Planet,
  Buttons,
  Button,
  PlanetImg,
  Body,
} from "./styles";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const [data] = useRequestData(`${BASE_URL}/trips`);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const onSubmitApplyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Candidatura realizada com sucesso!',
          showConfirmButton: false,
          timer: 1800
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado, verifique preenchimento dos campos',
          footer: `Código do erro ${err.response.status}`
        })
      });
    cleanFields();
  };

  return (
    <ApplyContainer>
      <Headers />
      <Body>
        <Title>
          <h1>Candidate-se a uma viagem</h1>
        </Title>
        <Planet>
          <PlanetImg src={planetas} alt="Planetas" />
          <Form onSubmit={onSubmitApplyToTrip}>
            <select
              name="trip"
              type={"text"}
              value={form.trip}
              onChange={onChange}
              required
            >
              <option value="" disabled>
                Escolha uma Viagem
              </option>
              {data?.trips.map((item, index) => {
                return (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <input
              name="name"
              type={"text"}
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
              required
            />

            <input
              name="age"
              type={"number"}
              value={form.age}
              onChange={onChange}
              placeholder={"Idade"}
              required
            />

            <textarea
              name="applicationText"
              type={"text"}
              value={form.applicationText}
              onChange={onChange}
              placeholder={"Texto de Candidatura"}
              required
            />

            <input
              name="profession"
              type={"text"}
              value={form.profession}
              onChange={onChange}
              placeholder={"Profissão"}
              required
            />

            <select
              name="country"
              type={"text"}
              value={form.country}
              onChange={onChange}
              required
            >
              <option value="" disabled>
                Escolha um país
              </option>
              {COUNTRIES.map((country, index) => {
                return (
                  <option value={country} key={index}>
                    {country}
                  </option>
                );
              })}
            </select>
            <Buttons>
              <Button>Enviar</Button>
              <Button onClick={() => goToBack(navigate)}>Voltar</Button>
            </Buttons>
          </Form>
        </Planet>
      </Body>
    </ApplyContainer>
  );
}

export default ApplicationFormPage;
