import React from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";

import CreatePlaylist from "../../pages/CreatePlaylist/CreatePlaylist";
import { PlaylistCard, PlaylistContainer, ButtonRemove } from "./styled";

export default class PlaylistListPage extends React.Component {
  playlistDelete = async (playlist) => {
    if (window.confirm(`Tem certeza que deseja remover ${playlist.name}?`)) {
      try {
        await axios.delete(
          `${BASE_URL}/${playlist.id}`,
          HEADERS
        );
        alert(`${playlist.name} removido com sucesso!`);
        this.props.getPlaylistList();
      } catch (error) {
        alert("Ocorreu um erro, tente novamente!");
      }
    }
  };

  render() {
    const playlist = this.props.playlistList.map((playlist, index) => {
      return (
        <PlaylistContainer key={index}>
        <PlaylistCard onClick={() => this.props.goToPlaylistDetailsPage(playlist)}>
          <p>{playlist.name}</p>
        </PlaylistCard>
          <ButtonRemove onClick={() => this.playlistDelete(playlist)}>X</ButtonRemove>
        </PlaylistContainer>
      );
    });

    return (
      <>
        <PlaylistContainer>
          <div>{playlist}</div>
        </PlaylistContainer>
        <CreatePlaylist getPlaylistList={this.props.getPlaylistList} />
      </>
    );
  }
}
