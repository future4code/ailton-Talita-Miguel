import React from "react";
import axios from "axios";
import styled from "styled-components";

const DetailUserContainer = styled.div`
  width: 100%;
`;

const InfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 3rem;
  }

  span {
    font-size: 2rem;
  }
`;

const ButtonBack = styled.button`
  margin-top: 20px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #f07cbd;
  box-shadow: 2px 2px 2px 1px #f46cb9;
`;

const ButtonRemove = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 2.5rem;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    color: #363636;
  }
`;

class DetailUser extends React.Component {
  state = {
    userDetail: {},
  };

  componentDidMount() {
    this.getUserDetail();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.getUserDetail();
    }
  }

  getUserDetail = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`;
    const headers = {
      headers: {
        Authorization: "talita-miguel-ailton",
      },
    };
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ userDetail: response.data });
      })
      .catch((error) => {
        console.log("error--", error.response);
        alert("Ocorreu um erro!");
      });
  };

  userDeleteDetails = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`;
    const headers = {
      headers: {
        Authorization: "talita-miguel-ailton",
      },
    };

    if (
      window.confirm(
        `Tem certeza que deseja remover ${this.props.userName} da lista?`
      )
    ) {
      try {
        const response = await axios.delete(url, headers);
        alert(`${this.props.userName} removido com sucesso!`);
        this.props.goToListUsers();
      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
  };

  render() {
    return (
      <DetailUserContainer>
        <InfoUser>
          <div>
            <p>Nome: {this.state.userDetail.name}</p>
            <span>E-mail: {this.state.userDetail.email}</span>
          </div>
          <div>
            <ButtonRemove onClick={() => this.userDeleteDetails()}>
              X
            </ButtonRemove>
          </div>
        </InfoUser>
        <ButtonBack onClick={this.props.goToListUsers}>
          Voltar para lista de usuários
        </ButtonBack>
      </DetailUserContainer>
    );
  }
}

export default DetailUser;
