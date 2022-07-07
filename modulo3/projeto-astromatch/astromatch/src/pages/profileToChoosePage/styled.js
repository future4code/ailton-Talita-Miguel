import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PersonImg = styled.img`
  height: 70vh;
  width: 100%;
  object-fit: fill;
  overflow: hidden;
  box-shadow: 2px 2px 8px 2px #ccc;
`;

export const Info = styled.div`
  margin-top: -177px;
  width: 100%;
  background: rgba(204, 204, 204, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border: 1px solid rgba(204, 204, 204, 0.3);

  P {
    padding-left: 16px;
    font-size: 1.5rem;
    margin: 16px 0;
  }
`;

export const ChooseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const HeartImg = styled.img`
  width: 30px;
  padding: 10px;

  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const NoImg = styled.img`
  width: 30px;
  padding: 10px;
  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const TrashImg = styled.img`
  width: 30px;
  padding: 10px;
  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;
