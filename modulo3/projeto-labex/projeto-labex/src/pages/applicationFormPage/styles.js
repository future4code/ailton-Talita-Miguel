import styled from "styled-components";

export const ApplyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
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
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }
`;

export const Planet = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

export const PlanetImg = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 30px;

  &:hover {
    animation: "PlanetImg" 1s ease-in;
  }

  @keyframes PlanetImg {
    100% {
      transform: rotate(10deg) translate3d(-200px, 0, 0);
      opacity: 0;
    }
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 200px;
    margin: 20px auto;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  select,
  input {
    padding: 8px;
    margin: 8px 0;
    border-radius: 6px;
    background: transparent;
    border: 1px solid #466fb6;
    &::placeholder {
      color: black;
    }
  }

  textarea {
    padding: 16px 8px;
    border-radius: 6px;
    background: transparent;
    border: 1px solid #466fb6;
    &::placeholder {
      color: black;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 120px;
  cursor: pointer;
  margin: 12px 0;
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
