import Headers from "../../components/Headers";
import {HomeContainer, MenuItem, Section, Card} from "./styles"
import {useRequestData} from "../../services/useRequestData"
import {BASE_URL} from "../../constants/url"
import {useNavigate} from "react-router-dom"

function HomePage() {
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

  const navigate = useNavigate()

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }

  const tripsList = data && data?.trips.map((trip, index) => {
    return <Card key={index}>
      <h2>{trip.name}</h2>
      <h3>{trip.planet}</h3>
      <p>{trip.description}</p>
      <p>Duração da viagem:{trip.durationInDays} dias</p>
      <p>Data da viagem: {trip.date}</p>
    </Card>
  })
    return (
      <div>
        <Headers />
        <HomeContainer>
          <MenuItem>
            <button onClick={goToApplicationFormPage}>Inscerver-se em uma viagem</button>
          </MenuItem>
          <Section>
            <h1>Lista de viagens</h1>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>{error.message}</p>}
            {!isLoading && data && data.trips.length > 0 && tripsList}
            {!isLoading && data && data.trips.length === 0 && <p>Não há viagens!</p>}
          </Section>
        </HomeContainer>
      </div>
    );
  }
  
export default HomePage;
  