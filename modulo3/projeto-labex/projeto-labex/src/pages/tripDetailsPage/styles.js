import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 70%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin-top: 50px;
  padding: 30px;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  color: rgb(70, 130, 180);
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 1.7rem;
  }
`;

export const Title2 = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0;
  color: gray;
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const Card = styled.div`
  margin: 16px 0;
  padding: 16px;

  background-color: #ebeced;
  position: relative;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

  width: 260px;
  margin-bottom: 48px;
  margin-right: 48px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    opacity: 0;
    transform: translateX(-100%);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0.3) 100%
    );
  }
`;

export const Info = styled.h2`
  color: gray;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 6px 0;
`;

export const Text = styled.p`
  color: black;
  word-wrap: break-word;
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 0;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const Button = styled.button`
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

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
