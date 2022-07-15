import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Headers from "../../components/Headers";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/img/spinner.gif";
import { goToBack } from "../../routes/coordinator";
import axios from "axios";

import {
  DetailsContainer,
  Cards,
  Card,
  CardsList,
  Buttons,
  Button,
  Info,
  Text,
  Title,
  Title2,
  Spinner,
} from "./styles";

function TripDetailsPage() {
  const token = window.localStorage.getItem("token");
  const pathParams = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/trip/${pathParams.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, verifique preenchimento dos campos",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  }, []);

  const decision = (candidate, choice) => {
    const body = {
      approve: choice,
    };

    axios
      .put(
        `${BASE_URL}/trips/${pathParams.id}/candidates/${candidate.id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then(() => {
        if (choice === true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Candidato aprovado!",
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Candidato reprovada!",
            showConfirmButton: false,
            timer: 1800,
          });
          window.location.reload();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, verifique preenchimento dos campos",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };

  const candidates = data?.candidates?.map((candidate, index) => {
    return (
      <Card key={index}>
        <Info>
          {candidate.name}, {candidate.age}
        </Info>
        <Text>País: {candidate.country}</Text>
        <Text>Profissão: {candidate.profession}</Text>
        <Buttons>
          <Button onClick={() => decision(candidate, true)}>Aprovar</Button>
          <Button onClick={() => decision(candidate, false)}>Reprovado</Button>
        </Buttons>
      </Card>
    );
  });

  const aprovedCandidates = data?.approved?.map((candidate, index) => {
    return (
      <Card key={index}>
        <Info>
          {candidate.name}, {candidate.age}
        </Info>
        <Text>País: {candidate.country}</Text>
        <Text>Profissão: {candidate.profession}</Text>
      </Card>
    );
  });

  return (
    <DetailsContainer>
      <Headers />
      <Cards>
        {isLoading && (
          <Spinner>
            <img src={spinner} alt="Loading" />
          </Spinner>
        )}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && data?.length > 0 && <p>Não há viagens!</p>}
        {!isLoading && data && (
          <div>
            <Title>{data.name}</Title>
            <Title2>Planeta: {data.planet}</Title2>
            <Text>Descrição: {data.description}</Text>
            <Text>Duração da viagem: {data.durationInDays} dias</Text>
            <Text>Data da viagem: {data.date}</Text>
            <Title2>Avaliação Pendente</Title2>
            <CardsList>
              {candidates?.length > 0 ? (
                candidates
              ) : (
                <Text>Não há candidatos pendentes</Text>
              )}
            </CardsList>
            <Title2>List a candidatos aprovados</Title2>
            <CardsList>
              {aprovedCandidates?.length > 0 ? (
                aprovedCandidates
              ) : (
                <Text>Não há candidatos aprovados</Text>
              )}
            </CardsList>
          </div>
        )}

        <Button onClick={() => goToBack(navigate)}>Voltar</Button>
      </Cards>
    </DetailsContainer>
  );
}

export default TripDetailsPage;
