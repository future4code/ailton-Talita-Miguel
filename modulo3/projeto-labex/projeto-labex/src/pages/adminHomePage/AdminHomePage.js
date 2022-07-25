import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useEffect } from "react";
import Swal from "sweetalert2";
import spinner from "../../assets/img/spinner.gif";
import Headers from "../../components/Headers";
import { deleteTrip } from "../../services/request";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import {
  AdmContainer,
  Section,
  Title,
  Cards,
  Card,
  Buttons,
  Button,
  Spinner,
} from "./styles";
import {
  goToLoginPage,
  goToTripDetailsPage,
  goToHomePage,
  goToCreateTripPage,
} from "../../routes/coordinator";

function AdminHomePage() {
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

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
          <FaTrashAlt onClick={() => deleteTrip(trip.id, trip.name, token)} />
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
        {isLoading && (
          <Spinner>
            <img src={spinner} alt="Loading" />
          </Spinner>
        )}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && data && data.trips.length > 0 && tripsList}
        {!isLoading && data && data.trips.length === 0 && (
          <p>Não há viagens!</p>
        )}
        <Buttons>
          <Button
            onClick={() => token !== null && goToCreateTripPage(navigate)}
          >
            Criar Viagem
          </Button>
          <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
        </Buttons>
      </Section>
    </AdmContainer>
  );
}

export default AdminHomePage;
