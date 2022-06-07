import React from "react";
import { SmallcardContainer, SmallcardContainerImg, SmallcardContainerH4, SmallcardContainerDiv } from "./CardPequeno.styled";

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <SmallcardContainerImg src={ props.imagem } alt="Foto"/>
            <SmallcardContainerDiv>
                <SmallcardContainerH4>{ props.nome }</SmallcardContainerH4>
                <p>{ props.descricao }</p>
            </SmallcardContainerDiv>
        </SmallcardContainer>
    )
}

export default CardPequeno;