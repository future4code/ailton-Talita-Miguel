import React, {Component} from 'react';
import styled from 'styled-components';

const FinalContainer = styled.div`
    width: 60%;
    margin: 30px auto;
`


export class Final extends Component {

    render() {
        
        return <>
            <FinalContainer>
                <h1>ETAPA 4 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h2>Muito obrigado por participar! Entraremos em contato!</h2>
            </FinalContainer>
        </>
    }
}