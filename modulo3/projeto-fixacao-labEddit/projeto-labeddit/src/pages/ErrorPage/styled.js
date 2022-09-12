import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
  width: 100%;
  min-height: 500px;
  height: 90vh;
  max-width: 428px;
  margin: 0 auto;
  box-shadow: 2px 2px 6px 2px #ccc;
`

export const ErrorImage = styled.img`
  max-width: 428px;

  @media screen and (max-width: 480px) {
    max-width: 350px;
  }
`