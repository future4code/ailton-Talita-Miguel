import React, {Component} from 'react';
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import styled from 'styled-components';

const Etapa2Container = styled.div`
    width: 60%;
    margin: 30px auto;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    margin: 0;
`


export class Etapa2 extends Component {
    state = {
        curso: "",
        unidade: "",
    }

    onChangeCurso = (event) => {
        this.setState({
			curso: event.target.value
		});
    }

    onChangeUnidade = (event) => {
        this.setState({
			unidade: event.target.value
		});
    }

    render() {
        
        return <>
            <Etapa2Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <FormContainer>
                    <PerguntaAberta pergunta={'5. Qual curso?'}/>
                    <Input type="text" value={this.state.curso} onChange={this.onChangeCurso} />

                    <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'}/>
                    <Input type="text" value={this.state.unidade} onChange={this.onChangeUnidade} />
                </FormContainer>
            </Etapa2Container>
        </>
    }
}