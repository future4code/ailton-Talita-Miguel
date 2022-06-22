import React from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser/CreateUser";
import UsersList from "./components/UsersList/UsersList";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background-image: linear-gradient(
    to left bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;

class App extends React.Component {
  state = {
    currentPage: "createUser",
    listUser: [],
  };

  componentDidMount() {
    this.getUserlists();
  }

  getUserlists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const headers = {
      headers: {
        Authorization: "talita-miguel-ailton",
      },
    };

    try {
      const response = await axios.get(url, headers);
      this.setState({ listUser: response.data });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  changePage = () => {
    switch (this.state.currentPage) {
      case "createUser":
        return (
          <CreateUser
            getUserlists={this.getUserlists}
            goToUsersList={this.goToUsersList}
          />
        );
      case "usersList":
        return (
          <UsersList
            listUser={this.state.listUser}
            getUserlists={this.getUserlists}
            goToCreateUser={this.goToCreateUser}
          />
        );
      default:
        return <div>Erro! Página não encontrada</div>;
    }
  };

  goToCreateUser = () => {
    this.setState({ currentPage: "createUser" });
  };

  goToUsersList = () => {
    this.setState({ currentPage: "usersList" });
  };

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        {this.changePage()}
      </AppContainer>
    );
  }
}

export default App;
