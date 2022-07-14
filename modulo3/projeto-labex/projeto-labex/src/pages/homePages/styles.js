import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const MenuItem = styled.div`
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 70vw;
`;

export const Card = styled.div`
  width: 60%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin: 16px;
  padding: 16px;

  h2, h3 {
    color: gray;
    padding: 4px 0;
  }

  P{
    padding: 8px 0;
    word-break: break-word;
  }
`;

export const Button = styled.button`
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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4682B4;

  h1 {
    margin-right: 16px;
  }

  &:hover {
    h1 {
      margin-right: 35px;
    }
  }
`;
