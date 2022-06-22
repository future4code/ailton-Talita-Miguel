import React from 'react'
import axios from "axios"
import styled from 'styled-components'

const DetailUserContainer = styled.div`
    width: 100%;
`

const ButtonBack = styled.button`
  margin-top: 20px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #F07CBD;
  box-shadow: 2px 2px 2px 1px #F46CB9;
`


class DetailUser extends React.Component {
    state = {
        userDetail: {}
    };

    componentDidMount() {
        this.getUserDetail();
    }

    getUserDetail = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
            {
                headers: {
                  Authorization: "talita-miguel-ailton"
                }
            }
          )
          .then((response) => {
            this.setState({ userDetail: response.data });
          })
          .catch((error) => {
            console.log(error.message);
            alert("Ocorreu um erro!")
          });
      };

	render() {
		return <DetailUserContainer>
            <div>
                <p>{this.state.userDetail.name}</p>
                <p>{this.state.userDetail.email}</p>
            </div>
            <ButtonBack onClick={this.props.changePage}>
                Voltar para lista de usuários
            </ButtonBack>
		</DetailUserContainer>
	}
}

export default DetailUser;
