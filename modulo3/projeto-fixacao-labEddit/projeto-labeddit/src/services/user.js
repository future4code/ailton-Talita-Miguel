import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { GlobalContext } from "../components/Global/GlobalContext";
import { goToFeedPage } from "../routes/coordinator";

export const Login = () => {
  const { setRightButton, isLoading, setIsLoading } = useContext(GlobalContext);
  // setIsLoading(true);
  const login = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        // setIsLoading(false);
        goToFeedPage(navigate);
        setRightButton("Logout");
      })
      .catch((err) => {
        // setIsLoading(false);
        alert(err.response.data.message);
      });
  };
  return { login };
};

export const SignUp = () => {
  const { rightButton, setRightButton, isLoading, setIsLoading } =
    useContext(GlobalContext);
  // setIsLoading(true);
  const signUp = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        // setIsLoading(false);
        goToFeedPage(navigate);
        setRightButton("Logout");
      })
      .catch((err) => {
        // setIsLoading(false);
        alert(err.response.data.message);
      });
  };
  return { signUp }
};
