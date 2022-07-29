import React from "react";
import FeedCards from "../../components/FeedCards/FeedCards";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { FeedPageContainer, FeedPageContante } from "./styled";
import FeedPageForm from "./FeedPageForm";
import { Divider } from "@mui/material";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);

  const postsList = posts.map((post) => {
    return <FeedCards post={post} key={post.id}/>;
  });
  return (
    <FeedPageContainer>
      <FeedPageForm />
      <Divider sx={{ width: '100%', mb:4, mt: 4, bgcolor:'#F9B24E' }}/>
      <FeedPageContante>{postsList}</FeedPageContante>
    </FeedPageContainer>
  );
};

export default FeedPage;
