import styled from 'styled-components';

export const ChatContainer = styled.div`
    width: 40%;
    display: grid;
    grid-template-rows: 1fr 50px;
    box-shadow: 0 0 1em #ccc;
`

export const MensagemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
`

export const MensagemDiv = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 10px;
    box-shadow: 0 0 1em #ccc;
    border-bottom: 2px solid #1D9FFB;
    margin: 16px 35px;
`

export const MinhaMensagemDiv = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    background: #DBF6C6;
    border-radius: 10px;
    box-shadow: 0 0 1em #ccc;
    border-bottom: 2px solid #1D9FFB;
    margin: 16px 35px;
`

export const IconVerifica = styled.img`
    width: 19px;
    align-self: flex-end;
    margin: 0 6px;
`

export const Mensagem = styled.p`
    display: flex;
    flex-direction: row;
    padding: 8px 16px;
    word-break: break-word;
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const InputNome = styled.input`
    width: 130px;
	border-radius: 5px;
    padding: 6px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #9293F8;
    box-shadow: 0 0 1em #ccc;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
    }
`
export const InputMsg = styled.input`
    width: 320px;
	border-radius: 5px;
    padding: 6px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #9293F8;
    box-shadow: 0 0 1em #ccc;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
    }
`

export const IconImage = styled.img`
    width: 25px;
	border-radius: 5px;
    margin: 6px;

    &:hover {
        width: 30px;
    }
`