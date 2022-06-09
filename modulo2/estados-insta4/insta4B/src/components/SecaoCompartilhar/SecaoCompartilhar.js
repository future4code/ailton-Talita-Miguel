import React, {Component} from 'react'
import styled from 'styled-components'

import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: space-evenly;
	align-items: center;
    padding: 5px;
	border-top: 1px solid black;
`

const IconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`

const IconImage = styled.img`
	width: 30px;
`

const Inputs = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

export class SecaoCompartilhar extends Component {
	state = {
		inputMsg: ""
	}

	onClickPostCompartilhado = (event) => {
		console.log(`Post compartilhado no ${event.target.id}, com a mensagem: ${this.state.inputMsg}`)
		this.setState({ inputMsg: "" })
	}

	pegarValorDoInputMsg = (event) => {
		this.setState({ inputMsg: event.target.value });
	}

	render() {
		return <CommentContainer>
			<Inputs>
				<p>Mensagem:</p>
				<input
					value={this.state.inputMsg}
					onChange={this.pegarValorDoInputMsg}
				/>
			</Inputs>
			<IconContainer>
				<IconImage 
					src={instagram}
					alt={'Icone'}
					id="instagram"
					onClick={this.onClickPostCompartilhado}
				/>
				<IconImage 
					src={facebook}
					alt={'Icone'}
					id="facebook"
					onClick={this.onClickPostCompartilhado}
				/>
				<IconImage 
					src={twitter}
					alt={'Icone'}
					id="twitter"
					onClick={this.onClickPostCompartilhado}
				/>
			</IconContainer>
		</CommentContainer>
	}
}
