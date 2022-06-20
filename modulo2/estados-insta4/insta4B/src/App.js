import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  margin-top: 20px;
`

const AdicionarContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  border-bottom: 1px solid gray;
`
const AdicionarInput = styled.input`
  margin: 0 8px;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'Bela',
        fotoUsuario: 'https://picsum.photos/id/200/50/50',
        fotoPost: 'https://picsum.photos/id/250/200/150'
      },
      {
        nomeUsuario: 'Ana',
        fotoUsuario: 'https://picsum.photos/id/500/50/50',
        fotoPost: 'https://picsum.photos/id/350/200/150'
      },
      {
        nomeUsuario: 'Zoe',
        fotoUsuario: 'https://picsum.photos/id/400/50/50',
        fotoPost: 'https://picsum.photos/id/450/200/150'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPosts = [...this.state.post, novoPost]

    this.setState({
      post: novosPosts,
      valorInputFotoPost: "",
      valorInputFotoUsuario: "",
      valorInputNomeUsuario: ""
    })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const listaDePost = this.state.post.map((item, index) => {
      return <Post key={index}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    })

    return (
      <>
        <AdicionarContainer>
          <AdicionarInput
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

          <AdicionarInput
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto Usuário"}
          />

          <AdicionarInput
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </AdicionarContainer>

        <MainContainer>
          {listaDePost}
        </MainContainer>
        
      </>
    );
  }
}

export default App;
