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
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  width: 120px;
  padding: 4px 0;
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
    opacity: 0.8;
  }
`;
