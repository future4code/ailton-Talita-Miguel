import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { GlobalContext } from "../components/Global/GlobalContext";
import { goToFeedPage } from "../routes/coordinator";

export const AddPost = () => {
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  // setIsLoading(true);
  const addPost = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => {
        clear();
        // setIsLoading(false);
        goToFeedPage(navigate);
        alert('Post enviado com sucesso!')
      })
      .catch((err) => {
        // setIsLoading(false);
        alert(err.response.data.message);
      });
    //console.log('post')
  };
  return { addPost };
};