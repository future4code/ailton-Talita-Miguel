import styled from "styled-components";


export const MatchesContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const PersonImg = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  box-shadow: 2px 2px 8px 2px #ccc;
`;

export const Info = styled.div`
  height: 120px;
  width: 100%;
  background: rgba(204, 204, 204, 0.19);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  P {
    padding-left: 16px;
    font-size: 1.3rem;
    font-family: "Pacifico", cursive;
  }

  &:hover{
    border: 1px solid #ccc;
  }
`;

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TrashImg = styled.img`
  width: 30px;
  padding: 10px;

  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;
