import React from "react";
import AddMusicToPlaylist from "../AddMusicToPlaylist/AddMusicToPlaylist";

import { MusicCard } from "./styled";

export default class PlaylistDetailPage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistSongsList(this.props.selectedPlaylist.id);
  }

  render() {
    const listSongs = this.props.songsList.map((song, index) => {
      return (
        <MusicCard key={index}>
          <p>Nome da música: {song.name}</p>
          <p>Artista: {song.artist}</p>
          <p>{song.url}</p>
          <audio src={song.url}></audio>
        </MusicCard>
      );
    });
    return (
      <>
        <h2>Lista de músicas da playlist: {this.props.selectedPlaylist.name}</h2>
        <div>{listSongs}</div>
        <AddMusicToPlaylist
          selectedPlaylist={this.props.selectedPlaylist}
          getPlaylistSongsList={this.props.getPlaylistSongsList}
        />
      </>
    );
  }
}
