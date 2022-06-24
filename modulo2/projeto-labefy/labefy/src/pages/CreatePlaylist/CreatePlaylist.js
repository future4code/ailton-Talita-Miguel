import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";
import {
  CreateUserContainer,
  Input,
  ButtonAdd,
  AddPlay,
  InfoAddPlay,
} from "./styled";

export default class CreatePlaylist extends React.Component {
  state = {
    namePlaylist: "",
  };

  handleName = (event) => {
    const value = event.target.value.toLowerCase();

    this.setState({ namePlaylist: value });
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.namePlaylist,
    };

    try {
      await axios.post(BASE_URL, body, HEADERS);
      this.props.getPlaylistList();
      alert("Playlist cadastrada com sucesso!");
      this.setState({ namePlaylist: "" });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  render() {
    return (
      <CreateUserContainer>
        <AddPlay>Cadastre uma Playlist 🎶</AddPlay>
        <InfoAddPlay>
          <Input
            type={"text"}
            value={this.state.namePlaylist}
            onChange={this.handleName}
            placeholder={"Nome da playlist"}
          />

          <ButtonAdd onClick={this.createPlaylist}>Adicionar</ButtonAdd>
        </InfoAddPlay>
      </CreateUserContainer>
    );
  }
}
