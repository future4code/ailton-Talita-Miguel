import React from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";
import { HEADERS } from "../../constants/headers";

import CreatePlaylist from "../../pages/CreatePlaylist/CreatePlaylist";
import fone from "../../assets/img/musica.png";
import remove from "../../assets/img/remove.png";
import {
  PlaylistContainer,
  Container,
  Cards,
  Card,
  Border,
  ButtonRemove,
  Title,
  BodyListPage,
  OurPlaylists,
} from "./styled";

export default class PlaylistListPage extends React.Component {
  playlistDelete = async (playlist) => {
    if (window.confirm(`Tem certeza que deseja remover ${playlist.name}?`)) {
      try {
        await axios.delete(`${BASE_URL}/${playlist.id}`, HEADERS);
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
        <Container key={index}>
          <Cards>
            <Border>
              <Card
                onClick={() => this.props.goToPlaylistDetailsPage(playlist)}
              >
                <img src={fone} alt="Fone" />
                <p>{playlist.name}</p>
              </Card>
              <ButtonRemove onClick={() => this.playlistDelete(playlist)}>
                <img src={remove} alt="Remover" />
              </ButtonRemove>
            </Border>
          </Cards>
        </Container>
      );
    });

    return (
      <PlaylistContainer>
        <section>
          <Title>LABEFY &#129311;</Title>
        </section>
        <BodyListPage>
          <CreatePlaylist getPlaylistList={this.props.getPlaylistList} />
          <section>
            <OurPlaylists>Nossas Playlists </OurPlaylists>
            {playlist ? playlist : <h2>Carregando...</h2>}
          </section>
        </BodyListPage>
      </PlaylistContainer>
    );
  }
}
