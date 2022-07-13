import rocket from "../assets/img/rocket.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const HeadersContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* background: rgb(14,56,106);
    background: radial-gradient(circle, rgba(14,56,106,1) 0%, rgba(12,18,34,1) 100%); */
`;

const AstrosImg = styled.img`
  width: 100px;
  margin-left: 16px;
`;

function Headers() {
  const navigate = useNavigate();

  return (
    <HeadersContainer>
      <AstrosImg src={rocket} alt="Astros" />
      <button onClick={() => goToLoginPage(navigate)}>Logar</button>
    </HeadersContainer>
  );
}

export default Headers;
