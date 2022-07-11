import astros from "../assets/img/astrologia.jpg"
import styled from "styled-components"


const HeadersContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgb(14,56,106);
    background: radial-gradient(circle, rgba(14,56,106,1) 0%, rgba(12,18,34,1) 100%);
`

const AstrosImg = styled.img`
    width: 200px;
    border-radius: 10px;
`

function Headers() {
    return (
      <HeadersContainer>
        <AstrosImg src={astros} alt="Astros"/>
        <button>Logar</button>
      </HeadersContainer>
    );
  }
  
  export default Headers;
  