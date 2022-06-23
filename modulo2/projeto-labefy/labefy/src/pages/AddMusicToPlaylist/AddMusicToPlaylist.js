import React from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";

import { AddMusicContainer, Input, ButtonAdd } from "./styled";

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

    const idPlayList = this.props.selectedPlaylist.id

    const body = {
      name: this.state.name, 
      artist: this.state.artist,
      url: this.state.url
    };
  
    try {
      const results = await axios.post(`${BASE_URL}/${idPlayList}/tracks`, body, HEADERS);
      console.log(results)
      this.props.getPlaylistSongsList(idPlayList);
      alert(`Musica cadastrada na playlist ${this.props.selectedPlaylist.name} com sucesso!`);
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  render() {
    return <AddMusicContainer>
      <h2>Adicione uma música na playlist: {this.props.selectedPlaylist.name}</h2>
        <section>
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
        </section>
    </AddMusicContainer>
  }
}
