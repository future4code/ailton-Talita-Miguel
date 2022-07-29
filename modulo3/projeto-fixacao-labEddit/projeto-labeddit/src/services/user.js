import { useContext } from "react";
import { BASE_URL } from "../constants/urls";
import { GlobalContext } from "../components/Global/GlobalContext";
import { goToFeedPage } from "../routes/coordinator";
import axios from "axios";
import Swal from "sweetalert2";

export const Login = () => {
  const { setRightButton } = useContext(GlobalContext);

  const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        setIsLoading(false);
        goToFeedPage(navigate);
        setRightButton("Logout");
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
  return { login };
};

export const SignUp = () => {
  const { setRightButton } = useContext(GlobalContext);
  const signUp = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        setIsLoading(false);
        goToFeedPage(navigate);
        setRightButton("Logout");
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
  return { signUp };
};
