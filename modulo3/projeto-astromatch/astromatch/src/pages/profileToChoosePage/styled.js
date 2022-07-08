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
  object-fit: cover;
    width: 100%;
    display: block;
    height: 430px;
    box-shadow: 2px 2px 8px 2px #dcdcdc;
    ${({isMatch, left}) => isMatch && 
    `animation: ${left === 'left' ? 'RotateLeft' : 'RotateRight'} 1s ease-in;
    `}

@keyframes RotateRight {
      100%{
        transform: rotate(10deg) translate3d(200px, 0, 0);
        opacity: 0;
      }
    }

    @keyframes RotateLeft {
      100%{
        transform: rotate(-10deg) translate3d(-200px, 0, 0);
        opacity: 0;
      }
    }
`;

export const DivImg = styled.div`
  height: 500px; 
  width: 390px;
`

export const Info = styled.div`
  margin-top: -130px;
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
  width: 40px;
  padding: 10px;

  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const NoImg = styled.img`
  width: 40px;
  padding: 10px;
  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const TrashImg = styled.img`
  width: 40px;
  padding: 10px;
  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;
