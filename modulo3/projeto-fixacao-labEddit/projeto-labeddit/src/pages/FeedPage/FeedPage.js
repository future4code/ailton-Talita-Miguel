import React, { useEffect, useState } from "react";
import FeedCards from "../../components/FeedCards/FeedCards";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { FeedPageContainer, Loading, FeedPageCards } from "./styled";
import FeedPageForm from "./FeedPageForm";
import { Divider, CircularProgress, Pagination } from "@mui/material";

const FeedPage = () => {
  useProtectedPage();
  const [posts, setPost] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onChangePage = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  const getPosts = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/posts?page=${currentPage}&size=10`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const postsList = posts?.map((post) => {
    return <FeedCards post={post} key={post.id} getPosts={getPosts} />;
  });

  return (
    <FeedPageContainer>
      <FeedPageForm getPosts={getPosts} />
      <Divider sx={{ width: "98%", mb: 4, mt: 4, bgcolor: "#F9B24E" }} />
      <Pagination count={20} onChange={onChangePage} page={currentPage} />
      <FeedPageCards>
        {!isLoading ? (
          <>{postsList}</>
        ) : (
          <Loading>
            <CircularProgress color="inherit" size={45} />
          </Loading>
        )}
      </FeedPageCards>
    </FeedPageContainer>
  );
};

export default FeedPage;
