import { useRequestData } from "../../services/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { BsTrash2Fill } from 'react-icons/bs';
import {
  goToLoginPage,
  goToTripDetailsPage,
  goToHomePage,
  goToCreateTripPage
} from "../../routes/coordinator";
import { Section, Cards, Card } from "./styles";

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

  const deleteTrip = (id, name) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar a viagem: ${name}`)

    if(confirm) {
      axios
      .delete(`${BASE_URL}/trip/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log("deleteTrip:", err.response);
      });
    }
    
  }

  const tripsList =
    data &&
    data?.trips.map((trip, index) => {
      return (
        <Cards key={index}>
          <Card
            onClick={() => token !== null && goToTripDetailsPage(navigate, trip.id)}
          >
            <h2>Viagem: {trip.name}</h2>
            <h3>Planeta: {trip.planet}</h3>
          </Card>
          <BsTrash2Fill onClick={()=> deleteTrip(trip.id, trip.name)}/>
        </Cards>
      );
    });

  return (
    <div>
      <Section>
        <h1>Lista de viagens</h1>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && data && data.trips.length > 0 && tripsList}
        {!isLoading && data && data.trips.length === 0 && (
          <p>Não há viagens!</p>
        )}
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => token !== null && goToCreateTripPage(navigate)}>Criar</button>
        <button>Logout</button>
      </Section>
    </div>
  );
}

export default AdminHomePage;
