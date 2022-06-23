import React from "react";
import axios from "axios";

import { BASE_URL } from "./constants/urls";
import { HEADERS } from "./constants/headers";

import PlaylistDetailPage from "./pages/PlaylistDetailPage/PlaylistDetailPage";
import PlaylistListPage from "./pages/PlaylistListPage/PlaylistListPage";

export default class App extends React.Component {
  state = {
    currentScreen: "list",
    playlistList: [],
    selectedPlaylist: "",
    songsList: [],
  };

  componentDidMount() {
    this.getPlaylistList();
  }

  getPlaylistList = async () => {
    try {
      const response = await axios.get(BASE_URL, HEADERS);
      this.setState({ playlistList: response.data.result.list });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  getPlaylistSongsList = async (idPlayList) => {
    console.log(idPlayList)
    try {
      const response = await axios.get(
        `${BASE_URL}/${idPlayList}/tracks`,
        HEADERS
      );
      console.log(response.data.result.tracks)
      this.setState({ songsList: response.data.result.tracks });
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  };

  goToPlaylistDetailsPage = (playlist) => {
    this.setState({ currentScreen: "details", selectedPlaylist: playlist });
  };

  goToPlaylistListPage = () => {
    this.setState({ currentScreen: "list" });
  };

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return (
          <PlaylistListPage
            playlistList={this.state.playlistList}
            getPlaylistList={this.getPlaylistList}
            goToPlaylistDetailsPage={this.goToPlaylistDetailsPage}
            songsList={this.state.songsList}
          />
        );
      case "details":
        return (
          <PlaylistDetailPage
            goToPlaylistListPage={this.goToPlaylistListPage}
            selectedPlaylist={this.state.selectedPlaylist}
            getPlaylistSongsList={this.getPlaylistSongsList}
            songsList={this.state.songsList}
          />
        );
      default:
        return (
          <div>
            <h1>Página não encontrada</h1>
          </div>
        );
    }
  };

  render() {
    return <div>{this.selectPage()}</div>;
  }
}
