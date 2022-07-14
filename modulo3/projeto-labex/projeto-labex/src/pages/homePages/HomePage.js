import Headers from "../../components/Headers";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";
import { goToApplicationFormPage } from "../../routes/coordinator";
import { HomeContainer, MenuItem, Section, Card, Button, Title } from "./styles";

function HomePage() {
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const navigate = useNavigate();

  const tripsList =
    data &&
    data?.trips.map((trip, index) => {
      return (
        <Card key={index}>
          <h2>Nome: {trip.name}</h2>
          <h3>Planeta: {trip.planet}</h3>
          <p>Descrição: {trip.description}</p>
          <p>Duração da viagem: {trip.durationInDays} dias</p>
          <p>Data da viagem: {trip.date}</p>
        </Card>
      );
    });
  return (
    <div>
      <Headers />
      <HomeContainer>
        <MenuItem>
          <Title>
            <h1>Lista de viagens </h1>
            <ImArrowRight />
          </Title>
          <Button onClick={() => goToApplicationFormPage(navigate)}>
            Inscrever-se em uma viagem
          </Button>
        </MenuItem>
        <Section>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && data && data.trips.length > 0 && tripsList}
          {!isLoading && data && data.trips.length === 0 && (
            <p>Não há viagens!</p>
          )}
        </Section>
      </HomeContainer>
    </div>
  );
}

export default HomePage;
