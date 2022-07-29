import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { GlobalContext } from "../components/Global/GlobalContext";
import { goToFeedPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const ReplyPost = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  // setIsLoading(true);
  const replyPost = ( form, id) => {
    axios
      .post(`${BASE_URL}/posts/${id}/comments`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setIsLoading(false);
        goToFeedPage(navigate);
        alert("Comentário adicionado com sucesso!");
      })
      .catch((err) => {
        // setIsLoading(false);
        alert(err.response.data.message);
      });
  };
  return { replyPost };
};
