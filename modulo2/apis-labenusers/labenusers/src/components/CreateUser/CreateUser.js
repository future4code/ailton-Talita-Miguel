import React from "react";
import styled from "styled-components";
import axios from "axios";

const CreateUserContainer = styled.div`
  display: block;
`;

const Input = styled.input`
  margin: 8px;
  padding: 5px 8px;
  border-radius: 5px;
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

const ButtonAdd = styled.button`
  margin-top: 20px;
  padding: 5px 8px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #f07cbd;
  box-shadow: 2px 2px 2px 1px #f46cb9;
`;

class CreateUser extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    const headers = {
      headers: {
        Authorization: "talita-miguel-ailton",
      },
    };

    try {
      const response = await axios.post(url, body, headers);
      this.props.getUserlists();
      alert("Cadastro realizado com sucesso!");
      this.setState({ inputName: "", inputEmail: "" });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  render() {
    return (
      <CreateUserContainer>
        <ButtonChange onClick={this.props.goToUsersList}>
          Ir para lista de Usuários
        </ButtonChange>
        <h2>Cadastro de Usuário</h2>
        <section>
          <Input
            type={"text"}
            value={this.state.inputName}
            onChange={this.handleName}
            placeholder={"Nome"}
          />

          <Input
            type={"email"}
            value={this.state.inputEmail}
            onChange={this.handleEmail}
            placeholder={"E-mail"}
          />

          <ButtonAdd onClick={this.createUsers}>Adicionar</ButtonAdd>
        </section>
      </CreateUserContainer>
    );
  }
}

export default CreateUser;
