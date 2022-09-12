import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/urls";

export const AddPost = () => {
  const addPost = (body, clear, navigate, setIsLoading, getPosts) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        clear();
        setIsLoading(false);
        getPosts();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Post enviado!',
          showConfirmButton: false,
          timer: 1500
        })
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
  return { addPost };
};
