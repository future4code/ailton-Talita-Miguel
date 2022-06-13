import React, {Component} from 'react';
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import PerguntasOpcoes from "../../components/PerguntasOpcoes/PerguntasOpcoes";
import styled from 'styled-components';

const Etapa3Container = styled.div`
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


export class Etapa3 extends Component {
    state = {
        conclusao: "",
        cursoComplementar: "",
    }

    onChangeConclusao = (event) => {
        this.setState({
			conclusao: event.target.value
		});
    }

    onChangeCursoComplementar = (event) => {
        this.setState({
			cursoComplementar: event.target.value
		});
    }

    render() {
        
        return <>
            <Etapa3Container>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <FormContainer>
                    <PerguntaAberta pergunta={'5. Por que você não terminou um curso de graduação?'}/>
                    <Input type="text" value={this.state.concusao} onChange={this.onChangeConcusao} />

                    <PerguntasOpcoes
                        pergunta={"6. Você fez algum curso complementar?"}
                        opcoes={[
                            "Curso técnico",
                            "Cursos de inglês",
                            "Não fiz curso complementar"
                        ]}
                        value={this.state.cursoComplementar}
                        onChange={this.onChangeCursoComplementar}
                    />
                </FormContainer>
            </Etapa3Container>
        </>
    }
}