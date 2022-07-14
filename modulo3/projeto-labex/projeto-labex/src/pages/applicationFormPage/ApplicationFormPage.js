import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { RiArrowGoBackFill } from "react-icons/ri";
import Headers from "../../components/Headers";
import axios from "axios";
import planetas from "../../assets/img/planeta1.png";
import { COUNTRIES } from "../../constants/countries";
import { useNavigate } from "react-router-dom";
import {
  ApplyContainer,
  Form,
  Title,
  Planet,
  Buttons,
  ButtonEnviar,
  Body,
} from "./styles";
import { goToBack } from "../../routes/coordinator";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [data] = useRequestData(`${BASE_URL}/trips`);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
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
    console.log(body);
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        alert("Viagem cadastrada com sucesso!");
      })
      .catch((err) => {
        console.log("ApplyTrip:", err.response);
        alert(`Algo deu errado, tente novamente`);
      });
    cleanFields();
  };

  return (
    <ApplyContainer>
      <Headers />
      <Body>
        <Title>
          <h1>Inscreva-se para uma viagem</h1>
        </Title>
        <Planet>
          <img src={planetas} alt="Planetas" />
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
              <ButtonEnviar>Enviar</ButtonEnviar>
              <RiArrowGoBackFill onClick={() => goToBack(navigate)} />
            </Buttons>
          </Form>
        </Planet>
      </Body>
    </ApplyContainer>
  );
}

export default ApplicationFormPage;
