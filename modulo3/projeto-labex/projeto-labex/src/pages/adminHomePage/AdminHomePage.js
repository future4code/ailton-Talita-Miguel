import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useEffect } from "react";
import Headers from "../../components/Headers"
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import {
  goToLoginPage,
  goToTripDetailsPage,
  goToHomePage,
  goToCreateTripPage,
} from "../../routes/coordinator";
import { AdmContainer, Section, Title, Cards, Card, Buttons, Button } from "./styles";

function AdminHomePage() {
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      goToLoginPage(navigate);
      alert(`Você não tem permissão para acessar essa página!`);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    goToHomePage(navigate);
  };

  const deleteTrip = (id, name) => {
    const confirm = window.confirm(
      `Tem certeza que deseja deletar a viagem: ${name}`
    );

    if (confirm) {
      axios
        .delete(`${BASE_URL}/trips/${id}`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          alert(`Viagem deletada!`);
          window.location.reload();
        })
        .catch((err) => {
          console.log("deleteTrip:", err.response);
        });
    }
  };

  const tripsList =
    data &&
    data?.trips.map((trip, index) => {
      return (
        <Cards key={index}>
          <Card
            onClick={() =>
              token !== null && goToTripDetailsPage(navigate, trip.id)
            }
          >
            <h2>Viagem: {trip.name}</h2>
            <h3>Planeta: {trip.planet}</h3>
          </Card>
          <FaTrashAlt onClick={() => deleteTrip(trip.id, trip.name)} />
        </Cards>
      );
    });

  return (
    <AdmContainer>
      <Headers />
      <Section>
        <Title>
          <h1>Painel Administrativo</h1>
        </Title>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && data && data.trips.length > 0 && tripsList}
        {!isLoading && data && data.trips.length === 0 && (
          <p>Não há viagens!</p>
        )}
        <Buttons>
          <Button
            onClick={() => token !== null && goToCreateTripPage(navigate)}
          >
            Criar
          </Button>
          <Button onClick={logout}>Logout</Button>
          <RiArrowGoBackFill onClick={() => goToHomePage(navigate)} />
        </Buttons>
      </Section>
    </AdmContainer>
  );
}

export default AdminHomePage;
