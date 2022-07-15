import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import ProfileToChoosePage from "./pages/profileToChoosePage/ProfileToChoosePage";
import MatchesPage from "./pages/matchesPage/MatchesPage";
import Love from "./assets/img/love.png";
import Couple from "./assets/img/couple.png";
import styled from "styled-components";
import GlobalStyle from "./assets/theme/globalStyles";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  margin: 45px auto 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  box-shadow: 2px 2px 8px 2px #dcdcdc;
  border-bottom: 1px solid #ccc;
  /* border: 3px solid; */
  /* border-image: linear-gradient(45deg, #ccc, black) 1; */
`;

const LoveImg = styled.img`
  width: 45px;
  cursor: pointer;
  &:hover {
    width: 43px;
  }
`;

const CoupleImg = styled.img`
  width: 45px;
  cursor: pointer;
  padding: 8px;
  &:hover {
    width: 43px;
  }
`;

function App() {
  const [matches, setMatches] = useState(false);
  const [listPersonMatches, setListPersonMatches] = useState([]);

  const goToMatchesPage = () => {
    setMatches(true);
  };

  const goToHomePage = () => {
    setMatches(false);
  };

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((response) => {
        setListPersonMatches(response.data.matches);
      })
      .catch((error) => {
        console.log("getMatches:", error.message);
      });
  };

  const clearList = () => {
    const confirm = window.confirm(
      "Deseja realmente remover todos os matches e perfis vistos?"
    );
    if (confirm) {
      axios
        .put(`${BASE_URL}/clear`)
        .then((response) => {
          if (response.data.message === "Success") {
            alert(
              `Todos os matches e perfis vistos foram removidos com sucesso!`
            );
            getMatches();
          }
        })
        .catch((error) => {
          console.log("clearList:", error.message);
        });
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Header>
        <h1>AstroMatch</h1>
        <div>
          {matches ? (
            <CoupleImg src={Couple} onClick={goToHomePage} />
          ) : (
            <LoveImg src={Love} onClick={goToMatchesPage} />
          )}
        </div>
      </Header>
      {matches ? (
        <MatchesPage
          clearList={clearList}
          getMatches={getMatches}
          listPersonMatches={listPersonMatches}
        />
      ) : (
        <ProfileToChoosePage
          clearList={clearList}
          getMatches={getMatches}
          listPersonMatches={listPersonMatches}
        />
      )}
    </AppContainer>
  );
}

export default App;
