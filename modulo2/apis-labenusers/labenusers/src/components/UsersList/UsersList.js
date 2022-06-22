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
  border: 1px solid #1c1c1c;
  box-shadow: 2px 2px 2px 3px #1c1c1c;
  margin: 18px 0;
  cursor: pointer;

  p {
    width: 100px;
  }
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

class UsersList extends React.Component {
  state = {
    page: "listUsers",
    userId: "",
  };

  userDelete = (userId, userName) => {
    if (
      window.confirm(`Tem certeza que deseja remover ${userName} da lista?`)
    ) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          {
            headers: {
              Authorization: "talita-miguel-ailton",
            },
          }
        )
        .then(() => {
          alert(`${userName} removido com sucesso!`);
          this.props.getUserlists();
        })
        .catch((e) => {
          alert("Ocorreu um erro");
        });
    }
  };

  changePage = (idUser) => {
    this.setState({ userId: idUser });
    if (this.state.currentPage === "listUsers") {
      this.setState({ currentPage: "detailUser" });
    } else {
      this.setState({ currentPage: "listUsers" });
    }
  };

  render() {
    return (
      <UserListContainer>
        {this.state.currentPage !== "listUsers" ? (
          <section>
            {this.props.listUser.map((user) => {
              return (
                <List key={user.id} onClick={() => this.changePage(user.id)}>
                  <p>{user.name}</p>
                  <ButtonRemove
                    onClick={() => this.userDelete(user.id, user.name)}
                  >
                    X
                  </ButtonRemove>
                </List>
              );
            })}
          </section>
        ) : (
          <DetailUser userId={this.state.userId} changePage={this.changePage} />
        )}
      </UserListContainer>
    );
  }
}

export default UsersList;
