import React from "react";
import { Chat } from "./components/Chat/Chat";

import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 50px 0;
`

class App extends React.Component {
  render() {

    return (
      <MainContainer >
        <Chat />
      </MainContainer>
    );

  }
  
}

export default App;
