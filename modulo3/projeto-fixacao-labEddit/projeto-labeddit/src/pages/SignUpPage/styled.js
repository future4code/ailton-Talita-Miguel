import styled from "styled-components";

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: left;
  line-height: 43px;
  color: #373737;
  margin: 80px 0;
`;

export const SignUpPageContainer = styled.div`
   width: 100%;
  max-width: 428px;
  margin: 0 auto;
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  align-items: center;
  margin-bottom: 10px;
  form {
    width: 100%;
    max-width: 500px;

    span {
      color: #4088CB;
    }
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
`;

export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 600px;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
  border-radius: 5px;
`;
