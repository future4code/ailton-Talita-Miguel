import React from 'react';
import { ImageButtonContainer, ImageButtonContainerImg } from "./ImagemButton.style";

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImageButtonContainerImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;