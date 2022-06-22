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

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "talita-miguel-ailton",
          },
        }
      )
      .then((response) => {
        this.props.getUserlists();
        alert("Operação realizado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ocorreu um erro!");
      });
  };

  render() {
    return (
      <CreateUserContainer>
        <section>
          <Input
            type={"text"}
            value={this.state.inputName}
            onChange={this.onChangeInputName}
            placeholder={"Nome"}
          />

          <Input
            type={"email"}
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"E-mail"}
          />

          <ButtonAdd onClick={this.createUsers}>Adicionar</ButtonAdd>
        </section>
      </CreateUserContainer>
    );
  }
}

export default CreateUser;
