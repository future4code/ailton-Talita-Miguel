import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../routes/coordinator";
import axios from "axios";

import { Card } from "./styles";

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
        console.log("TripDetailsPage:", err.response);
      });
  }, []);

  const decision = (candidate, choice) => {
    const body = {
      approve: choice
    }

    axios
      .put(`${BASE_URL}/trips/${pathParams.id}/candidates/${candidate.id}/decide`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res)
        alert(`Candidato aprovado!`)
      })
      .catch((err) => {
        console.log("decision:", err.response);
      });

    console.log(candidate)
  }

  const candidates = data?.candidates?.map((candidate, index) => {
    return (
      <div key={index}>
        <p>
          {candidate.name}, {candidate.age}
        </p>
        <p>{candidate.country}</p>
        <p>{candidate.profession}</p>
        <button onClick={() =>decision(candidate, true)}>Aprovar</button>
        <button onClick={() =>decision(candidate, false)}>reprovado</button>
      </div>
    );
  });

  const aprovedCandidates = data?.approved?.map((candidate, index) => {
    return (
      <div key={index}>
        <p>
          {candidate.name}, {candidate.age}
        </p>
        <p>{candidate.country}</p>
        <p>{candidate.profession}</p>
      </div>
    );
  });

  return (
    <div>
      <Card>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && data?.length > 0 && <p>Não há viagens!</p>}
        {!isLoading && data && (
          <div>
            <h2>{data.name}</h2>
            <h3>{data.planet}</h3>
            <p>{data.description}</p>
            <p>Duração da viagem:{data.durationInDays} dias</p>
            <p>Data da viagem: {data.date}</p>
            <h3>Avaliação Pendente</h3>
            <div>
              {candidates?.length > 0 ? (
                candidates
              ) : (
                <p>Não há candidatos pendentes</p>
              )}
            </div>
            <div>
              {aprovedCandidates?.length > 0 ? (
                <>
                <h3>Lista candidatos aprovados</h3>
                {aprovedCandidates}
                </>
              ) : (
                <p>Não há candidatos aprovados</p>
              )}
            </div>
          </div>
        )}
        <button onClick={() => goToBack(navigate)}>Voltar</button>
      </Card>
    </div>
  );
}

export default TripDetailsPage;
