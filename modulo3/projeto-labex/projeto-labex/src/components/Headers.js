import rocket from "../assets/img/rocket.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const HeadersContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 3px 2px #ccc;
`;

const AstrosImg = styled.img`
  width: 60px;
  margin-left: 16px;
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

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 16px;
  border-radius: 5px;
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
  &:hover {
    opacity: 0.5;
  }
`;

function Headers() {
  const navigate = useNavigate();

  return (
    <HeadersContainer>
      <AstrosImg src={rocket} alt="Astros" />
      <Text>LABEX</Text>
      <Button onClick={() => goToLoginPage(navigate)}>Logar</Button>
    </HeadersContainer>
  );
}

export default Headers;
