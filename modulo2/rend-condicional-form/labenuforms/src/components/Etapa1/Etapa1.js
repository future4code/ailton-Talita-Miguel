import React, {Component} from 'react';
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import PerguntasOpcoes from "../../components/PerguntasOpcoes/PerguntasOpcoes";
import styled from 'styled-components';

const Etapa1Container = styled.div`
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


export class Etapa1 extends Component {
    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: ""
    }

    onChangeNome = (event) => {
        this.setState({
			nome: event.target.value
		});
    }

    onChangeIdade = (event) => {
        this.setState({
			idade: event.target.value
		});
    }

    onChangeEmail = (event) => {
        this.setState({
			email: event.target.value
		});
    }

    onChangeEscolaridade = (event) => {
        this.setState({
			escolaridade: event.target.value
		});
    }

    render() {
        
        return <>
            <Etapa1Container>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <FormContainer>
                    <PerguntaAberta pergunta={'1. Qual é o seu nome?'}/>
                    <Input type="text" value={this.state.nome} onChange={this.onChangeNome} />

                    <PerguntaAberta pergunta={'2. Qual é a sua idade?'}/>
                    <Input type="text" value={this.state.idade} onChange={this.onChangeIdade} />

                    <PerguntaAberta pergunta={'3. Qual é o seu e-mail?'}/>
                    <Input type="text" value={this.state.email} onChange={this.onChangeEmail} />

                    <PerguntasOpcoes
                        pergunta={"4. Qual a sua escolaridade?"}
                        opcoes={[
                            "Ensino médio incompleto",
                            "Ensino médio completo",
                            "Ensino superior incompleto",
                            "Ensino superior completo"
                        ]}
                        value={this.state.escolaridade} 
                        onChange={this.onChangeEscolaridade}
                    />
                </FormContainer>
            </Etapa1Container>
        </>
    }
}