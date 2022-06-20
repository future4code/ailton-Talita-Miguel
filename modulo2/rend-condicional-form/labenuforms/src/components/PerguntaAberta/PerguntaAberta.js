import React, {Component} from 'react';
import styled from 'styled-components';

const Etapa1Container = styled.div`
    width: 60%;
`

const Pergunta = styled.p`
    margin: 16px;
`


class PerguntaAberta extends Component {
    
    render() {
        
        return <Etapa1Container>
            <Pergunta>{this.props.pergunta}</Pergunta>
        </Etapa1Container>
        
    }
}

export default PerguntaAberta