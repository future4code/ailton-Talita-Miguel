import React, {Component} from 'react';
import styled from 'styled-components';

const Pergunta = styled.p`
    margin: 16px;
`

const Select = styled.select`
    width: 13em;
`

class PerguntaOpcoes extends Component {

    renderizaOpcoes = () => {
        const opcoes = this.props.opcoes.map((item, index) => {
            console.log(item, index)
            return <option key={index}>{item}</option>
        })

        return opcoes
    }
    
    
    render() {
        return <>
            <Pergunta>{this.props.pergunta}</Pergunta>
            <Select>{this.renderizaOpcoes()}</Select>
        </>
    }
}

export default PerguntaOpcoes