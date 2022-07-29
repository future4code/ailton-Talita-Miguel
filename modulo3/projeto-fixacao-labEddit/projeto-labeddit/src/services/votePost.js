import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { GlobalContext } from "../components/Global/GlobalContext";
import { goToFeedPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const VotePost = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  // setIsLoading(true);
  const votePost = (id, choice) => {
    const body = {
      direction: choice
    }
    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setIsLoading(false);
        goToFeedPage(navigate);
        alert("Voto enviado com sucesso!");
      })
      .catch((err) => {
        // setIsLoading(false);
        alert(err.response.data.message);
      });
  };
  return { votePost };
};
