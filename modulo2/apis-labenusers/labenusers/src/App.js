import './App.css';
import React from 'react';
import axios from "axios";
import CreateUser from './components/CreateUser/CreateUser';
import UsersList from './components/UsersList/UsersList';
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background-image: linear-gradient(to left bottom, #d16ba5, 
    #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, 
    #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  
`

const ButtonChange = styled.button`
  margin-top: 20px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #F07CBD;
  box-shadow: 2px 2px 2px 1px #F46CB9;
`

class App extends React.Component {
  state = {
    listUser: [],
    currentPage: "createUser"
  }

  changePage = () => {
    if (this.state.currentPage === "createUser") {
      this.setState({ currentPage: "usersList" });
    } else {
      this.setState({ currentPage: "createUser" });
    }
  };

  componentDidMount() {
    this.getUserlists()
  }

  getUserlists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "talita-miguel-ailton"
          }
        }
      )
      .then((response) => {
        this.setState({ listUser: response.data });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ocorreu um erro!")
      });
  };
  

  render() {
    return (
      <AppContainer>
        {this.state.currentPage === "createUser"?
          <CreateUser getUserlists={this.getUserlists}/> 
          :
          <UsersList listUser={this.state.listUser} getUserlists={this.getUserlists}/>
        }
        <ButtonChange onClick={this.changePage}>
          {this.state.currentPage === "createUser"?
            "Lista de usuários": "Cadastro de usuário"
          }
        </ButtonChange>
      </AppContainer>
    );
  }
}

export default App;
