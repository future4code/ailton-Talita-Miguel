import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const gerarImagemFoto = () => {
  let id = Math.floor(Math.random() * 100);
  let foto = {
    fotoUsuario: `https://picsum.photos/id/${id}/50/50`,
    fotoPost: `https://picsum.photos/id/${id}/200/150`
  }
  return foto
}

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={gerarImagemFoto().fotoUsuario}
          fotoPost={gerarImagemFoto().fotoPost}
        />

        <Post
          nomeUsuario={'Ana'}
          fotoUsuario={gerarImagemFoto().fotoUsuario}
          fotoPost={gerarImagemFoto().fotoPost}
        />

        <Post
          nomeUsuario={'Fabi'}
          fotoUsuario={gerarImagemFoto().fotoUsuario}
          fotoPost={gerarImagemFoto().fotoPost}
        />
      </MainContainer>
    );
  }
}

export default App;
