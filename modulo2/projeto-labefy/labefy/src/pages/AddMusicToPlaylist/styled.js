import styled from "styled-components";

export const AddMusicContainer = styled.div`
  display: block;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 2px #383838;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
  line-height: 80px;
  font-size: 1.6rem;
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
    padding-left: 0;
    line-height: 50px;
    margin: 10px 0;
  }
`;

export const Fields = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 90%;
  padding: 5px 8px;
  margin-bottom: 20px;
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
  width: 50%;
  padding: 5px 16px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: #2cd9f8;
  box-shadow: 2px 2px 2px 1px #2cd9f8;

  &:hover {
    opacity: 0.9;
  }
`;
