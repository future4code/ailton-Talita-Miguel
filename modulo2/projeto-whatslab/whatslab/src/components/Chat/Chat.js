import React, {Component} from 'react';
import send from '../../img/send.png';
import verifica from '../../img/verifica.png';

import {
    ChatContainer, 
    MensagemContainer,
    MensagemDiv,
    MinhaMensagemDiv,
    IconVerifica,
    Mensagem,
    InputsContainer,
    InputNome,
    InputMsg,
    IconImage
} from "./Chat.styled"

export class Chat extends Component {
    state = {
        mensagens: [],
        inputNome: "",
		inputMsg: ""
	}

    adicionaMensagem = () => {
        const novaMensagem = {
            nome: this.state.inputNome,
            mensagem: this.state.inputMsg
        }

        const novasMensagens = [ ...this.state.mensagens, novaMensagem] 

        this.setState({
            mensagens: novasMensagens,
            inputMsg: "",
            inputNome: ""
        })
    }

    adicionaMensagemEnter = (event) => {
        if(event.keyCode === 13) {
            this.adicionaMensagem()
        }
    }



    deletarMensagem = (index) => {
        const listaMensagem = [...this.state.mensagens]

        const deletarConfirmacao = window.confirm(`Deseja realmente apagar esta mensagem?`)

        if(deletarConfirmacao) {
            listaMensagem.splice(index, 1)
        }

        this.setState({
            mensagens: listaMensagem,
            inputMsg: "",
            inputNome: ""
        })
    }


    onChangeInputNome = (event) => {
		this.setState({
			inputNome: event.target.value
		});
	}

    onChangeInputMsg = (event) => {
		this.setState({
			inputMsg: event.target.value
		});
	}

    render() {
        const listaDeComponentes = this.state.mensagens.map((msg, index) => {
            if(msg.nome !== 'eu') {
                return (
                    <MensagemDiv key={index} onDoubleClick={() => this.deletarMensagem(index)}>
                        <Mensagem><strong>{msg.nome}</strong></Mensagem>
                        <Mensagem>{msg.mensagem}</Mensagem>
                    </MensagemDiv>
                )
            } else {
                return (
                    <MinhaMensagemDiv key={index} onDoubleClick={() => this.deletarMensagem(index)}>
                        <Mensagem>{msg.mensagem}</Mensagem>
                        <IconVerifica
                            src={verifica}
                            alt={'Enviado'}
                        />
                    </MinhaMensagemDiv>
                )
            }
        })
        return <>
            <ChatContainer>
                <MensagemContainer>
                    {listaDeComponentes}
                </MensagemContainer>
                <InputsContainer>
                    <InputNome
                        value={this.state.inputNome}
                        placeholder='Usuário'
                        onChange={this.onChangeInputNome}
                    />
                    <InputMsg
                        value={this.state.inputMsg}
                        placeholder='Mensagem'
                        onChange={this.onChangeInputMsg}
                        onKeyDown={this.adicionaMensagemEnter}
                    />
                    <IconImage 
                        src={send}
                        alt={'Enviar'}
                        onClick={this.adicionaMensagem}
                    />
                </InputsContainer>
            </ChatContainer>
        </>
    }
}