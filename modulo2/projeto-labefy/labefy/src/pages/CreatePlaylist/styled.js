import styled from "styled-components";

export const CreateUserContainer = styled.div`
  box-shadow: 1px 1px 10px 2px #383838;
  width: 35%;
  margin: 0 50px;
  border-radius: 15px;

  @media (max-width: 400px) {
    width: 90%;
    margin: 0 auto 40px;
  }
`;

export const InfoAddPlay = styled.section`
  text-align: center;
  margin-top: 40px;

  @media (max-width: 400px) {
    margin-top: 20px;
  }
`;

export const AddPlay = styled.h2`
  text-align: center;
  margin-top: 10px;
  line-height: 80px;
  font-size: 2rem;
  background-image: linear-gradient(
    to bottom,
    #d16ba5,
    #aa8fd8,
    #69bff8,
    #46eefa
  );
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 5px 8px;
  margin-bottom: 30px;
  border-radius: 5px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #69bff8;

  color: white;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &::placeholder {
    color: #69bff8;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const ButtonAdd = styled.button`
  width: 60%;
  padding: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #2cd9f8;
  box-shadow: 2px 2px 2px 1px #2cd9f8;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 400px) {
    padding: 10px;
    margin-bottom: 40px;
  }
`;
