import axios from "axios";
import { BASE_URL } from "../constants/urls";
import Swal from "sweetalert2";


export const votePost = (id, choice, getPosts) => {
  const body = {
    direction: choice,
  };
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      getPosts();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado. Tente novamente mais tarde",
        footer: `Código do erro ${error.response.status}`,
      });
    });
};

export const DeleteVotePost = (getPosts) => {
  const deleteVote = (id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPosts();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${error.response.status}`,
        });
      });
  };
  return { deleteVote };
};
