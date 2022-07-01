import React from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";

import { AddMusicContainer, Input, ButtonAdd, Title, Fields } from "./styled";

export default class AddMusicToPlaylist extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  addMusic = async () => {
    const idPlayList = this.props.selectedPlaylist.id;

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    try {
      await axios.post(`${BASE_URL}/${idPlayList}/tracks`, body, HEADERS);
      this.props.getPlaylistSongsList(idPlayList);
      alert(
        `Musica cadastrada na playlist ${this.props.selectedPlaylist.name} com sucesso!`
      );
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  render() {
    return (
      <AddMusicContainer>
        <Title>
          Adicione uma música na playlist: {this.props.selectedPlaylist.name}
        </Title>
        <Fields>
          <Input
            type={"text"}
            value={this.state.name}
            onChange={this.handleName}
            placeholder={"Nome da música"}
          />

          <Input
            type={"text"}
            value={this.state.artist}
            onChange={this.handleArtist}
            placeholder={"Artista"}
          />

          <Input
            type={"text"}
            value={this.state.url}
            onChange={this.handleUrl}
            placeholder={"URL"}
          />

          <ButtonAdd onClick={this.addMusic}>Adicionar</ButtonAdd>
        </Fields>
      </AddMusicContainer>
    );
  }
}
