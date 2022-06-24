import styled from "styled-components";

export const PlaylistContainer = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  line-height: 80px;
  font-size: 2.5rem;
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
`;

export const OurPlaylists = styled.h2`
  text-align: left;
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
    font-size: 2rem;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media (max-width: 400px) {
    display: block;
  }
`;

export const Cards = styled.div`
  border: 1px solid black;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  width: 100%;
  padding: 5px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    color: #69bff8;
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 8px;

    background-image: linear-gradient(
      to left bottom,
      #d16ba5,
      #c777b9,
      #ba83ca,
      #aa8fd8,
      #9a9ae1,
      #8aa7ec,
      #79b3f4,
      #69bff8,
      #52cffe,
      #41dfff,
      #46eefa,
      #5ffbf1
    );

    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Border = styled.div`
  width: 100%;
  padding: 3px;
  border-radius: 5px;
  background: linear-gradient(
    to left bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );

  &:hover {
    opacity: 0.7;
  }
`;

export const BodyListPage = styled.section`
  display: inline-flex;

  @media (max-width: 400px) {
    display: block;
  }
`;

export const ButtonRemove = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  background: black;
  cursor: pointer;
  &:hover {
    color: #363636;
  }

  img {
    width: 30px;
  }
`;
