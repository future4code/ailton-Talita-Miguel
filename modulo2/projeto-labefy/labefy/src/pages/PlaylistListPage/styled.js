import styled from "styled-components";

export const PlaylistContainer = styled.div`
  border: 1px solid black;
  display: flex;
`;

export const PlaylistCard = styled.div`
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #363636;
  }
`;
