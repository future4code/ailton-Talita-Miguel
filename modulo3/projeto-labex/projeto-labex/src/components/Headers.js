import rocket from "../assets/img/rocket.png";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  goToLoginPage,
  goToHomePage,
  goToAdminHomePage,
} from "../routes/coordinator";

const HeadersContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 3px 2px #ccc;

  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    height: 120px;
  }
`;

const Header = styled.div`
  display: inline-flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const AstrosImg = styled.img`
  width: 60px;
  margin-left: 16px;

  &:hover {
    animation: "Planet" 1s ease-in;
  }

  @keyframes Planet {
    100% {
      transform: rotate(10deg) translate3d(0, -100px, 0);
      opacity: 0;
    }
  }

  @media (max-width: 400px) {
    width: 40px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;

  background-image: linear-gradient(
    to bottom,
    rebeccapurple,
    steelblue,
    turquoise
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
`;
const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100px;
  cursor: pointer;
  margin: 12px 8px;
  padding: 8px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  border: none;
  background: #466fb6;
  &:hover {
    opacity: 0.8;
  }
`;

function Headers() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [isLog, setIsLog] = useState(false);

  useEffect(() => {
    if (token !== null) {
      setIsLog(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    goToHomePage(navigate);
  };

  return (
    <HeadersContainer>
      <Header>
        <AstrosImg src={rocket} alt="Astros" />
        <Text>LABEX</Text>
      </Header>
      <Buttons>
        {isLog ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={() => goToLoginPage(navigate)}>Logar</Button>
        )}

        {token !== null && (
          <Button onClick={() => goToAdminHomePage(navigate)}>Admin</Button>
        )}
      </Buttons>
    </HeadersContainer>
  );
}

export default Headers;
