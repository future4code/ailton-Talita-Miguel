import styled from "styled-components";

export const AdmContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 800px;
  margin: 20px auto;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;

  font-size: 1.5rem;
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

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin: 16px 0;
  padding: 16px 8px;

  svg {
    color: gray;
    cursor: pointer;
  }

  svg:hover {
    color: #c4302b;
  }

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid steelblue;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 75%;
  color: gray;

  h2 {
    width: 75%;
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    h2, h3 {
      font-size: 1rem;
    }
  }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
`

export const Button = styled.button`
  width: 150px;
  cursor: pointer;
  margin: 12px 0;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  border: none;
  background: #466fb6;
  &:hover {
    opacity: 0.8;
  }
`;

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
