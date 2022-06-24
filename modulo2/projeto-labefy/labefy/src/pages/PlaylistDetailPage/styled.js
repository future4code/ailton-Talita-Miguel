import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  height: 120px;
  padding: 0 8px;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 400px) {
    display: block;
    height: 200px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  line-height: 80px;
  font-size: 2rem;
  padding-left: 20px;
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

export const Border = styled.div`
  width: 100%;
  margin: 20px 0;
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
`;

export const BodyDetails = styled.section`
  display: flex;

  @media (max-width: 400px) {
    display: block;
  }
`;
export const AddMusic = styled.div`
  width: 30%;

  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ListSongs = styled.div`
  display: flex;
  gap: 30px;
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    width: 90%;
    margin: 0 auto;
    gap: 0px;
  }
`;

export const MusicCard = styled.div`
  padding: 20px;

  p {
    color: lightblue;
    font-size: 20px;
    line-height: 34px;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: end;
  width: 100%;
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  background: black;
  cursor: pointer;
  &:hover {
    color: #363636;
  }

  img {
    width: 40px;
  }
`;

export const ButtonBack = styled.button`
  margin: 0 20px;
  padding: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #0f1e54;
  box-shadow: 2px 2px 2px 1px #0f1e54;

  @media (max-width: 400px) {
    display: flex;
    margin: 0 auto;
  }
`;
