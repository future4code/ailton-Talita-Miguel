import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Border = styled.div`
  width: 500px;
  height: 60vh;
  margin-top: 50px;
  box-shadow: 2px 2px 3px 2px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border-radius: 6px;
  background: transparent;
  border: 1px solid #466fb6;
  &::placeholder {
    color: black;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
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
      #1589ff
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ButtonLog = styled.button`
  width: 150px;
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
