import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const MenuItemDesktop = styled.div`
  width: 300px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const MenuItemMobile = styled.div`
  display: none;
  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
  }
`;

export const Section = styled.section`
  width: 70vw;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 60%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin: 16px;
  padding: 16px;

  h2,
  h3 {
    color: gray;
    padding: 4px 0;
  }

  P {
    padding: 8px 0;
    word-break: break-word;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 240px;
  cursor: pointer;
  margin: 12px 8px;
  padding: 12px;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  border: none;
  background: #466fb6;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    width: 150px;
    cursor: pointer;
    margin: 12px 8px;
    padding: 8px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    border: none;
    background: #466fb6;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4682b4;

  h1 {
    margin-right: 16px;
    background-image: linear-gradient( to bottom, rebeccapurple, steelblue, turquoise );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }

  &:hover {
    h1 {
      margin-right: 35px;
    }
  }

  @media (max-width: 400px) {
    align-items: baseline;
    h1 {
      margin-right: 8px;
    }
  }
`;
export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
