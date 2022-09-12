import styled from "styled-components";

export const FeedPageContainer = styled.div`
  width: 100%;
  max-width: 428px;
  margin: 0 auto;

  nav {
    ul {
      justify-content: center;
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 90vw;

    li {
      width: 35px;
    }
  }
`;

export const FeedPageFormContainer = styled.div`
  width: 100%;
  max-width: 428px;
  margin: 0 auto;
`;

export const FeedPageCards = styled.div`
  width: 100%;
  max-width: 428px;
  margin-top: 20px;

  .css-j3l50b-MuiPaper-root-MuiCard-root {
    margin: 20px auto;
  }
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  align-items: center;
  justify-content: center;
  color: #f99d5e;
`;
