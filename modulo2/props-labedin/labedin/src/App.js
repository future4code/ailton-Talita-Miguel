import React from 'react';
import foto from './img/Talie.jpg'
import email from './img/email.png'
import endereco from './img/endereco.png'
import companhia from './img/companhia.png'
import graduacao from './img/graduacao.png'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import { AppContainer, PageSectionContainer, PageSectionContainerH3, PageSectionContainerH2 } from "./App.styled";


function App() {
  return (
    <AppContainer>
      <PageSectionContainer>
        <PageSectionContainerH2>Dados pessoais</PageSectionContainerH2>
        <CardGrande 
          imagem={foto} 
          nome="Talita Miguel" 
          descricao="Olá, me chamo Talita. Sou estudante de programação, estou no último ano de Sistemas de informação e também faço um curso integral de programação fulstack na Labenu"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          nome="E-mail:" 
          descricao="talita@gmail.com"
        />

        <CardPequeno
          imagem={endereco}
          nome="Endereço:" 
          descricao="Rua Garret"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <PageSectionContainerH3>Experiências profissionais</PageSectionContainerH3>
        <CardGrande 
          imagem={companhia} 
          nome="Econet" 
          descricao="Fiz um ano de estágio, como desenvolvedora front-end" 
        />
        
        <CardGrande 
          imagem={companhia}
          nome="LINX" 
          descricao="Fiz seis meses de estágio, como desenvolvedora front-end" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <PageSectionContainerH3>Cursos</PageSectionContainerH3>
        <CardGrande 
          imagem={graduacao} 
          nome="Javascript" 
          descricao="Curso de Javascript - Rocketseat" 
        />
        
        <CardGrande 
          imagem={graduacao} 
          nome="HTML" 
          descricao="Curso de HTML - Curso em vídeo" 
        />

        <CardGrande 
          imagem={graduacao} 
          nome="CSS" 
          descricao="Curso de CSS - Curso em vídeo" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <PageSectionContainerH3>Minhas redes sociais</PageSectionContainerH3>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
