import React from "react";
import axios from "axios";
import AddMusicToPlaylist from "../AddMusicToPlaylist/AddMusicToPlaylist";
import remove from "../../assets/img/remove.png";
import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";
import {
  Header,
  MusicCard,
  ButtonBack,
  Title,
  ListSongs,
  Border,
  BodyDetails,
  AddMusic,
  ButtonRemove,
} from "./styled";

export default class PlaylistDetailPage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistSongsList(this.props.selectedPlaylist.id);
  }

  musicDelete = (songId) => {
    if (window.confirm(`Tem certeza que deseja remover esta música?`)) {
      try {
        axios.delete(
          `${BASE_URL}/${this.props.selectedPlaylist.id}/tracks/${songId}`,
          HEADERS
        );
        alert("A música foi removida com sucesso!");
        this.props.getPlaylistSongsList(this.props.selectedPlaylist.id);
      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
  };

  render() {
    const listSongs = this.props.songsList.map((song, index) => {
      return (
        <Border key={index}>
          <MusicCard>
            <ButtonRemove onClick={() => this.musicDelete(song.id)}>
              <img src={remove} alt="Remover" />
            </ButtonRemove>
            <p>
              <strong>Nome da música:</strong> {song.name}
            </p>
            <p>
              <strong>Artista:</strong> {song.artist}
            </p>

            <iframe
              src={song.url}
              title="Link"
              width="100%"
              height="80"
              frameBorder="0"
              allow="clipboard-write; encrypted-media;"
            ></iframe>
          </MusicCard>
        </Border>
      );
    });
    return (
      <>
        <Header>
          <Title>
            Lista de músicas da playlist: {this.props.selectedPlaylist.name}
          </Title>
          <ButtonBack onClick={this.props.goToPlaylistListPage}>
            Voltar para lista de playlist
          </ButtonBack>
        </Header>
        <BodyDetails>
          <AddMusic>
            <AddMusicToPlaylist
              selectedPlaylist={this.props.selectedPlaylist}
              getPlaylistSongsList={this.props.getPlaylistSongsList}
            />
          </AddMusic>

          <ListSongs>
            {listSongs ? listSongs : <h2>Carregando...</h2>}
          </ListSongs>
        </BodyDetails>
      </>
    );
  }
}
