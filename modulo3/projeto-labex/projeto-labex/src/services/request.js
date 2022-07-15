import { BASE_URL } from "../constants/url";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteTrip = (id, name, token) => {
  const confirm = window.confirm(
    `Tem certeza que deseja deletar a viagem: ${name}`
  );

  if (confirm) {
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Viagem removida!",
          showConfirmButton: false,
          timer: 1800,
        });
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, tente novamente",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  }
};