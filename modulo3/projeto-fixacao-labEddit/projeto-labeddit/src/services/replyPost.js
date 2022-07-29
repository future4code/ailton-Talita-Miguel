import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const ReplyPost = () => {
  const navigate = useNavigate();
  const replyPost = (form, id, setIsLoading, clear, getPosts) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts/${id}/comments`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setIsLoading(false);
        goToFeedPage(navigate);
        getPosts();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comentário adicionado com sucesso!!',
          showConfirmButton: false,
          timer: 1500
        })
        clear();
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${error.response.status}`,
        });
      });
  };
  return { replyPost };
};
