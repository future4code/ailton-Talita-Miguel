import React from 'react';

import { BigcardContainer, BigcardContainerImg, BigcardContainerh4, BigcardContainerDiv } from "./CardGrande.styled";

function CardGrande(props) {
    return (
        <BigcardContainer>
            <BigcardContainerImg src={ props.imagem } alt="Foto Perfil"/>
            <BigcardContainerDiv>
                <BigcardContainerh4>{ props.nome }</BigcardContainerh4>
                <p>{ props.descricao }</p>
            </BigcardContainerDiv>
        </BigcardContainer>
    )
}

export default CardGrande;