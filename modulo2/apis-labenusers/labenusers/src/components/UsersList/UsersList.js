import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetailUser from "../../components/DetailUser/DetailUser";

const UserListContainer = styled.div`
  display: block;
`;

const List = styled.div`
  display: flex;
  padding: 16px;
  margin: 18px 0;
  width: 100%;
  border: 1px solid #1c1c1c;
  justify-content: space-between;
  box-shadow: 2px 2px 2px 3px #1c1c1c;
  cursor: pointer;
`;

const ButtonRemove = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #363636;
  }
`;

const ButtonChange = styled.button`
  margin: 20px 0;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #f07cbd;
  box-shadow: 2px 2px 2px 1px #f46cb9;
`;

class UsersList extends React.Component {
  state = {
    page: "listUsers",
    userId: "",
    userName: "",
  };

  componentDidUpdate() {
    this.changePage();
  }

  userDelete = async (user) => {
    console.log(user);
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`;
    const headers = {
      headers: {
        Authorization: "talita-miguel-ailton",
      },
    };

    if (
      window.confirm(`Tem certeza que deseja remover ${user.name} da lista?`)
    ) {
      try {
        const response = await axios.delete(url, headers);
        alert(`${user.name} removido com sucesso!`);
        this.props.getUserlists();
      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
  };

  goToListUsers = () => {
    this.setState({ page: "listUsers", userId: "" });
  };

  changePage = () => {
    if (this.state.page === "detailUser") {
      return (
        <DetailUser
          userId={this.state.userId}
          userName={this.state.userName}
          goToListUsers={this.goToListUsers}
          getUserlists={this.props.getUserlists()}
        />
      );
    }
  };

  render() {
    const goToDetailUser = (user) => {
      this.setState({ page: "detailUser", userId: user.id, userName: user.name });
    };

    const listUsers = this.props.listUser.map((user) => {
      return (
        <List key={user.id}>
          <div onClick={() => goToDetailUser(user)}>
            <p>{user.name}</p>
          </div>
          <ButtonRemove onClick={() => this.userDelete(user)}>X</ButtonRemove>
        </List>
      );
    });

    return (
      <UserListContainer>
        {this.state.page === "listUsers" ? (
          <>
            <ButtonChange onClick={this.props.goToCreateUser}>
              Ir para cadastro de Usuários
            </ButtonChange>
            <h2>Lista de Usuário</h2>
            <div>{listUsers}</div>
          </>
        ) : (
          this.changePage()
        )}
      </UserListContainer>
    );
  }
}

export default UsersList;
